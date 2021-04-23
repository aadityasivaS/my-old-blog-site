import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';

export default class Page extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post page post-full">
                <header className="post-header inner-sm">
                  <h1 className="post-title underline">{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                  {_.get(this.props, 'page.frontmatter.subtitle', null) && (
                  <div className="post-subtitle inner-sm">
                    {htmlToReact(_.get(this.props, 'page.frontmatter.subtitle', null))}
                  </div>
                  )}
                </header>
                {_.get(this.props, 'page.frontmatter.img_path', null) && (
                <div className="post-image">
                  <img src={withPrefix(_.get(this.props, 'page.frontmatter.img_path', null))} alt={_.get(this.props, 'page.frontmatter.img_alt', null)} />
                </div>
                )}
                <div className="post-content inner-sm">
                  {markdownify(_.get(this.props, 'page.markdown', null))}
                </div>
              </article>
            </Layout>
        );
    }
}
