/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Classic theme.
 * Contains multi-coloured border to create shadow effect.
 */
'use strict';

goog.provide('Blockly.Themes.Classic');

goog.require('Blockly.Theme');


// Temporary holding object.
Blockly.Themes.Classic = {};

Blockly.Themes.Classic.defaultBlockStyles = {
  "environment_indices_blocks": {
    "colourPrimary": "#d31900"
  },
  "environment_constants_blocks": {
    "colourPrimary": "#ff8500"
  },
  "environment_variables_blocks": {
    "colourPrimary": "#ffdf00"
  },
  "environment_functions_blocks": {
    "colourPrimary": "#b1dc57"
  },
  "environment_actions_blocks": {
    "colourPrimary": "#04862c"
  },
  "logic_blocks": {
    "colourPrimary": "#0097bc"
  },
  "loop_blocks": {
    "colourPrimary": "#0052be"
  },
  "math_blocks": {
    "colourPrimary": "#25286f"
  },
  "list_blocks": {
    "colourPrimary": "#99138e"
  },
  "text_blocks": {
    "colourPrimary": "160"
  },
  "colour_blocks": {
    "colourPrimary": "20"
  },
  "variable_blocks": {
    "colourPrimary": "#dd056a"
  },
  "variable_dynamic_blocks": {
    "colourPrimary": "310"
  },
  "procedure_blocks": {
    "colourPrimary": "#000000"
  },
  "hat_blocks": {
    "colourPrimary": "330",
    "hat": "cap"
  }
};

Blockly.Themes.Classic.categoryStyles = {
  "colour_category": {
    "colour": "20"
  },
  "list_category": {
    "colour": "260"
    // "colour": "#8d8680"
  },
  "logic_category": {
    "colour": "210"
    // "colour": "#d56428"
  },
  "loop_category": {
    "colour": "120"
    // "colour": "#506c31"
  },
  "math_category": {
    "colour": "230"
    // "colour": "#31446c"
  },
  "procedure_category": {
    "colour": "290"
    // "colour": "#432362"
  },
  "text_category": {
    "colour": "160"
  },
  "variable_category": {
    "colour": "330"
    // "colour": "#73225c"
  },
  "variable_dynamic_category": {
    "colour": "310"
  }
};

Blockly.Themes.Classic =
    new Blockly.Theme(Blockly.Themes.Classic.defaultBlockStyles,
        Blockly.Themes.Classic.categoryStyles);
