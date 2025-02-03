import React from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import messages_id from "./../../../translations/id.json";
import messages_en from "./../../../translations/en.json";

const messages={
  'en' : messages_en,
  'id' : messages_id
}

class LanguageProvider extends React.PureComponent {

  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        key={this.props.locale}
        messages={messages[this.props.locale]}
      >
        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }
}




export default LanguageProvider;
