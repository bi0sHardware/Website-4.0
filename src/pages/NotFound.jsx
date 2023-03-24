import React from "react";

import Header2 from "../partials/Header2";
import Footer from "../partials/Footer";
function NotFound() {
  return (
    <>
      <section>
        <Header2 />
      </section>
      <section className="background">
        <div className="content-html bg-black">
          <div className="content-body">
            <div className="error">
              <div className="wrap">
                <div className={404}>
                  <pre>
                    <code>
                      {"\n"}
                      {"\t"} <span className="green">&lt;!</span>
                      <span>WhatToType html?</span>
                      <span className="green">&gt;</span>
                      {"\n"}
                      <span className="orange">&lt;html&gt;</span>
                      {"\n"}
                      {"    "}
                      <span className="orange">&lt;style&gt;</span>
                      {"\n"}
                      {"   "}* {"{"}
                      {"\n"}
                      {"\t"}
                      {"\t"}
                      {"        "}
                      <span className="green">You came to wrong route</span>:
                      <br />
                      <span className="blue">Get back... You cant hack </span>
                      ;{"\n"}
                      {"}"}
                      {"\n"}
                      {"     "}
                      <span className="orange">&lt;/style&gt;</span>
                      {"\n"} <span className="orange">&lt;body&gt;</span> {"\n"}
                      {"              "}ERROR 404!{"\n"}
                      {"\t"}
                      {"\t"}
                      {"\t"}
                      {"\t"}FILE NOT FOUND!{"\n"}
                      {"\t"}
                      {"\t"}
                      {"\t"}
                      {"\t"}
                      <span className="comment">
                        &lt;!--The file you are looking for, {"\n"}
                        {"\t"}
                        {"\t"}
                        {"\t"}
                        {"\t"}
                        {"\t"}is not where you think it is.--&gt;{"\n"}
                        {"\t"}
                        {"\t"}
                      </span>
                      {"\n"} <span className="orange" /> {"\n"}
                      {"\t"}
                      {"\t"}
                      {"\t"}
                      {"  "}
                      {"\n"}
                      {"\n"}
                      {"\n"}
                    </code>
                  </pre>
                </div>
                <code>
                  <br />
                  <span className="info">
                    <br />
                    <span className="orange">&nbsp;&lt;/body&gt;</span>
                    <br />
                    <span className="orange">&lt;/html&gt;</span>
                  </span>
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}

export default NotFound;
