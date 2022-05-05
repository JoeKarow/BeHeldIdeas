/* eslint-disable react/jsx-one-expression-per-line */
/** @format */

import React from "react";
import settingsJSON from "../data/settings/settings.json";

function Copyright() {
  return (
    <ul className="copyright">
      <li>
        &copy;
        {settingsJSON.author}. All rights reserved.
      </li>
      <li>
        Development: <a href="https://joekarow.dev">JoeKarow.dev</a>
      </li>
      <li>
        Design: <a href="http://html5up.net">HTML5 UP</a>
      </li>
    </ul>
  );
}

export default Copyright;
