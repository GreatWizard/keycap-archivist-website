import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Maker = (props) => {
  const { pageContext, location } = props;
  const { maker, makerUrl, sculpt } = pageContext;

  let seoTitle = `${maker.name} - ${sculpt.name}`;
  if (location.hash) {
    seoTitle += ` ${sculpt.colorways.find((x) => x.id === location.hash.replace('#', '')).name}`;
  }

  return (
    <Layout>
      <SEO title={seoTitle} />
      <h2 className="text-3xl my-6">
        <Link to={makerUrl}>{maker.name}</Link> / <span className="font-bold">{sculpt.name}</span>
      </h2>
      <ul className="flex flex-wrap flex-col md:flex-row w-full md:-mx-2">
        {sculpt.colorways.map((c) => (
          <li key={c.id} id={c.id} className="flex w-64 mx-auto md:m-0 md:w-1/3 lg:w-1/5 py-2 md:px-2">
            <div className="flex flex-col max-w-full min-w-full bg-white p-2">
              <div className="w-full h-full bg-gray-300 thumbnail-wrapper">
                <img className="h-full w-full object-cover" src={c.img} />
              </div>
              <div className="flex flex-row justify-between content-center font-bold pt-4 pb-2 px-2">
                <div className="pr-3">{c.name}</div>
                <CopyToClipboard text={`${location.href}#${c.id}`}>
                  <span className="cursor-pointer text-sm text-blue-500 hover:text-blue-800">
                    <FontAwesomeIcon icon={['fas', 'link']} />
                  </span>
                </CopyToClipboard>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Maker;
