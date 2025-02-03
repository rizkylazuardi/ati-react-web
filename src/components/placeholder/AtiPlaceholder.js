import React from 'react';
import ContentLoader, { Facebook, Instagram, BulletList, List, Code } from 'react-content-loader';
import PropTypes from 'prop-types';

class AtiPlaceholder extends React.Component {
    static defaultProps = {

      animate: true,
      speed: 2,
      width: 400,
      height: 130,
      preserveAspectRatio: 'xMidYMid meet',
      primaryColor: '#f3f3f3',
      secondaryColor: '#ecebeb',
      primaryOpacity: 1,
      secondaryOpacity: 1,
      style: null,

    }

    static propTypes = {
      /**
         * false to render with no animation
         */
      animate: PropTypes.bool,

      /**
         * Animation speed in seconds
         */
      speed: PropTypes.number,

      /**
         * Classname in the <svg/>
         */
      className: PropTypes.string,

      /**
         * viewBox width of <svg/>
         */
      width: PropTypes.number,

      /**
         * viewBox height of <svg/>
         */
      height: PropTypes.number,

      /**
         * Aspect ratio option of <svg/>
         */
      preserveAspectRatio: PropTypes.string,

      /**
         * Background
         */
      primaryColor: PropTypes.string,

      /**
         * Animation color
         */
      secondaryColor: PropTypes.string,

      /**
         * Background opacity (0 = transparent, 1 = opaque)
         */
      primaryOpacity: PropTypes.number,

      /**
         * Animation opacity (0 = transparent, 1 = opaque)
         */
      secondaryOpacity: PropTypes.number,

      /**
         * Ex: { width: '100%', height: '70px' }
         */
      style: PropTypes.object,

      /**
         * Use the same value of prop key, that will solve inconsistency on the SSR.
         */
      uniquekey: PropTypes.string,
    }

    generateParagraph = () => {
      const paragraph = [];
      let y = 40;
      paragraph.push(<rect x="0" y="0" rx="3" ry="3" width="300" height="20" />);
      for (let i = 0; i < this.props.count; i++) {
        paragraph.push(<rect x="0" y={y} rx="3" ry="3" width="220" height="10" />);
        y += 20;
      }
      return paragraph;
    }

    render() {
      const props = this.props;

      const {
        animate, speed, className, width, height, preserveAspectRatio, primaryColor,
        secondaryColor, primaryOpacity, secondaryOpacity, style, uniquekey,
      } = this.props;

      return (
        props.loading
          ? <div {...props}>
            {
              props.type === 'paragraph'
                ? <ContentLoader
                  animate={animate}
                  speed={speed}
                  className={className}
                  width={width}
                  height={height}
                  preserveAspectRatio={preserveAspectRatio}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                  primaryOpacity={primaryOpacity}
                  secondaryOpacity={secondaryOpacity}
                  style={style}
                  uniquekey={uniquekey}
                >
                  {this.generateParagraph()}
                  </ContentLoader>
                : props.type === 'facebook'
                  ? <Facebook
                    animate={animate}
speed={speed}
className={className}
width={width}
height={height}
                    preserveAspectRatio={preserveAspectRatio}
primaryColor={primaryColor}
secondaryColor={secondaryColor}
                    primaryOpacity={primaryOpacity}
secondaryOpacity={secondaryOpacity}
style={style}
uniquekey={uniquekey}
                  />
                  : props.type === 'instagram'
                    ? <Instagram
                      animate={animate}
speed={speed}
className={className}
width={width}
height={height}
                      preserveAspectRatio={preserveAspectRatio}
primaryColor={primaryColor}
secondaryColor={secondaryColor}
                      primaryOpacity={primaryOpacity}
secondaryOpacity={secondaryOpacity}
style={style}
uniquekey={uniquekey}
                    />
                    : props.type === 'bulletList'
                      ? <BulletList
                        animate={animate}
speed={speed}
className={className}
width={width}
height={height}
                        preserveAspectRatio={preserveAspectRatio}
primaryColor={primaryColor}
secondaryColor={secondaryColor}
                        primaryOpacity={primaryOpacity}
secondaryOpacity={secondaryOpacity}
style={style}
uniquekey={uniquekey}
                      />
                      : props.type === 'list'
                        ? <List
                          animate={animate}
speed={speed}
className={className}
width={width}
height={height}
                          preserveAspectRatio={preserveAspectRatio}
primaryColor={primaryColor}
secondaryColor={secondaryColor}
                          primaryOpacity={primaryOpacity}
secondaryOpacity={secondaryOpacity}
style={style}
uniquekey={uniquekey}
                        />
                        : props.type === 'code'
                          ? <Code
                            animate={animate}
speed={speed}
className={className}
width={width}
height={height}
                            preserveAspectRatio={preserveAspectRatio}
primaryColor={primaryColor}
secondaryColor={secondaryColor}
                            primaryOpacity={primaryOpacity}
secondaryOpacity={secondaryOpacity}
style={style}
uniquekey={uniquekey}
                          />
                          : props.type === 'custom'
                            ? <ContentLoader
                              animate={animate}
speed={speed}
className={className}
width={width}
height={height}
                              preserveAspectRatio={preserveAspectRatio}
primaryColor={primaryColor}
secondaryColor={secondaryColor}
                              primaryOpacity={primaryOpacity}
secondaryOpacity={secondaryOpacity}
style={style}
uniquekey={uniquekey}
                            >
                              {props.contentLoad.map((item) => {
                                if (item.type === 'rect') {
                                  return (
                                    <rect x={item.x} y={item.y} rx={item.rx} ry={item.ry} width={item.width} height={item.height} />
                                  );
                                } else if (item.type === 'circle') {
                                  return (
                                    <circle cx={item.cx} cy={item.cy} r={item.r} />
                                  );
                                }
                              })}
                              </ContentLoader>
                            : null

            }
            </div>
          : props.children
      );
    }
}

export default AtiPlaceholder;
