import React from 'react';
import './index.less';

const Footer = (props) => (
  <div className="footer">
    <ul className="footer-links">
    {props.footerlist.map((item, index) =>
      <li key={index}><a href={item.linkTo}>{item.title}</a></li>
    )}
    </ul>
    <ul className="social-links">
    {props.sociallist.map((item, index) =>
      <li key={index}>
        <a href={item.linkTo}>
          <img src={item.imgsrc} alt={item.imgalt} />
        </a>
      </li>
    )}
    </ul>
  </div>
);

Footer.propTypes = {
  footerlist: React.PropTypes.array.isRequired,
  sociallist: React.PropTypes.array.isRequired
};

Footer.defaultProps = {
  sociallist: [
    {
      linkTo: 'http://twitter.com',
      imgsrc: 'data:image/png;base64,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',
      imgalt: 'Twitter'
    }, {
      linkTo: 'http://facebook.com',
      imgsrc: 'data:image/png;base64,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',
      imgalt: 'Facebook'
    }, {
      linkTo: 'http://plus.google.com/',
      imgsrc: 'data:image/png;base64,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',
      imgalt: 'Google Plus'
    }, {
      linkTo: 'http://linkedin.com',
      imgsrc: 'data:image/png;base64,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',
      imgalt: 'Linkedin'
    }
  ], footerlist: [
    {
      linkTo: '#',
      title: 'Menu'
    }, {
      linkTo: '#',
      title: 'Blog'
    }, {
      linkTo: '#',
      title: 'About Us'
    }, {
      linkTo: '#',
      title: 'Contact Us'
    }
  ]
};

export default Footer;