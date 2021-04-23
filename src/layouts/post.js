import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post post-full">
                <header className="post-header inner-sm">
                  <h1 className="post-title underline">{_.get(this.props, 'page.frontmatter.title', null)}</h1>
                  {_.get(this.props, 'page.frontmatter.subtitle', null) && (
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'page.frontmatter.subtitle', null))}
                  </div>
                  )}
                </header>
                {_.get(this.props, 'page.frontmatter.content_img_path', null) && (
                <div className="post-image">
                  <img src={withPrefix(_.get(this.props, 'page.frontmatter.content_img_path', null))} alt={_.get(this.props, 'page.frontmatter.content_img_alt', null)} />
                </div>
                )}
                <div className="post-content inner-sm">
                  {markdownify(_.get(this.props, 'page.markdown', null))}
                </div>
                <footer className="post-meta inner-sm">
                  <time className="published"
                    dateTime={moment(_.get(this.props, 'page.frontmatter.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'page.frontmatter.date', null)).strftime('%A, %B %e, %Y')}</time>
                </footer>
              </article>
            </Layout>
        );
    }
}
