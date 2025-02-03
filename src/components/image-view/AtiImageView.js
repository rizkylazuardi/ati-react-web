import React, { Component } from 'react';
import ProcessImage from 'react-imgpro';
import PropTypes from 'prop-types';
import { Lightbox } from 'react-modal-image';
import AtiCard from './../card/AtiCard';
import AtiCardMeta from './../card/AtiCardMeta';
import AtiButton from '../button/AtiButton';
import './style.css';

class AtiImageView extends Component {
    static propTypes = {
        containerStyle: PropTypes.objectOf(PropTypes.any),
        isLoading: PropTypes.bool,
    }

    static defaultProps = {
        containerStyle: {},
        isLoading: false,
    }

    state = {
        url: '',
        err: null,
        opened: false,
    }

    getDownLoadAttr = (encoded, alt) => {
        const result = { download: true };
        const mime = encoded.match(/data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/);

        if (typeof encoded !== 'string') {
          return result;
        }
        if (mime && mime.length) {
          const mimeType = mime[1];
          const ext = mimeType.split('/')[1];
          result.download = `${alt || 'download'}.${ext}`;
        }

        return result;
    }

    closeModal = () => {
        this.setState({ opened: false });
    }

    openModal = () => {
        this.setState({ opened: true });
    }

    render() {
        const {
            isLoading, title, description, src, contentClassName, className,
            alt, actions, containerStyle, imageConfig, bodyStyle, buttonClassName,
        } = this.props;
        const { url, err } = this.state;
        // const imageWidth = containerStyle.width ? { width: containerStyle.width}
        return (
            <React.Fragment>
                <AtiCard
                    {...this.props}
                    isLoading={isLoading}
                    className={`image-card ${className}`}
                    content={
                        (title || description) ?
                        <AtiCardMeta
                            metaTitle={title}
                            metaDescription={description}
                            className={contentClassName}
                        />
                        :
                        null
                    }
                    extraElement={null}
                    extraStyle={{ border: '0px !important', ...containerStyle }}
                    bodyStyle={bodyStyle}
                    cover={
                        <ProcessImage
                            {...imageConfig}
                            image={src}
                            processedImage={(_url, _err) => this.setState({ url: _url, err: _err })}
                        />
                    }
                    actions={actions ||
                        [
                        <a href={src} {...this.getDownLoadAttr(src, alt)} target="_blank" >
                            <AtiButton
                                type="default"
                                text="Download"
                                className={`default-button-action ${buttonClassName}`}
                            />
                        </a>,
                        <AtiButton
                            type="default"
                            text="View"
                            className={`default-button-action ${buttonClassName}`}
                            events={{ onClick: this.openModal }}
                        />,
                        ]
                    }
                />
                {
                    this.state.opened && (
                        <Lightbox
                        medium={src}
                        large={src}
                        alt={alt || 'image1'}
                        onClose={this.closeModal}
                        />
                    )
                }
            </React.Fragment>
        );
    }
}

export default AtiImageView;