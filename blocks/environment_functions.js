/**
 * @license
 * Copyright 2012 Google LLC
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
 * @fileoverview Environment function blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.Environment_functions');  // Deprecated
goog.provide('Blockly.Constants.Environment_functions');

goog.require('Blockly');
goog.require('Blockly.Blocks');

Blockly.Constants.Environment_functions.HUE = 20;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT

// DEEP LEARNING

{
  "type": "num_layers",
  "message0": "%1 레이어 개수: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "hidden_dim",
  "message0": "%1 뉴런 개수: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "ddpg_batch_size",
  "message0": "%1 배치 사이즈: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "ddpg_buffer_size",
  "message0": "%1 버퍼 사이즈: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "dqn_buffer_size",
  "message0": "%1 버퍼 사이즈: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "ddpg_gamma",
  "message0": "%1 할인율: %2 ",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "ddpg_dec_exploration",
  "message0": "%1 매 %2 반복마다 탐색을 줄입니다",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "",
  "helpUrl": ""
},

{
  "type": "dqn_dec_exploration",
  "message0": "%1 매 %2 반복마다 탐색을 줄입니다",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "num",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "style": "environment_functions_blocks",
  "tooltip": "",
  "helpUrl": ""
},

// RULE-BASED

  {
      "type": "distance",
      "message0": "%1 (x1 : %2 y1 : %4)과 (x2 : %3 y2 : %5 )간 거리",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "x2",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y2",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "relative_distance",
      "message0": "%1 (x1 : %2 y1 : %4)과 (x2 : %3 y2 : %5 )간 상대 거리",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "x1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "x2",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y1",
          "check": "Number"
        },
        {
          "type": "input_value",
          "name": "y2",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "degree2radian",
      "message0": "%1 각도단위 변환(deg2rad)(도 : %2)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "deg",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "radian2degree",
      "message0": "%1 각도단위 변환(rad2deg)(라디안 : %2)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "rad",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "predict_ball",
      "message0": "%1 %2 스탭 후 공 자세 예측",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "prediction_step",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": null,
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "find_closest_robot",
      "message0": "공에 가까운 로봇 개수",
      "inputsInline": true,
      "output": "Number",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_goal",
      "message0": "%1 %2 가 골 영역에 있습니다",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_penalty",
      "message0": "%1 %2 가 페널티 영역에 있습니다",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_own_field",
      "message0": "%1 %2 가 필드에 있습니다",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_goal",
      "message0": "%1 %2 가 상대팀 골 영역에 있습니다",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_penalty",
      "message0": "%1 %2 가 상대팀 페널티 영역에 있습니다",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_opp_field",
      "message0": "%1 %2 가 상대팀 필드에 있습니다",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "predicted_ball"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_gk_zone",
      "message0": "공이 골키퍼 존에 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_d1_zone",
      "message0": "공이 수비수 1 영역에 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_d2_zone",
      "message0": "공이 수비수 2 영역에 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_f1_zone",
      "message0": "공이 공격수 1 영역에 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "ball_is_f2_zone",
      "message0": "공이 공격수 2 영역에 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_default",
      "message0": "게임 상태가 기본값 입니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_goalkick",
      "message0": "골킥 상태 입니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_cornerkick",
      "message0": "코너킥 상태 입니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_kickoff",
      "message0": "킥오프 상태 입니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },
  
    {
      "type": "is_state_penaltykick",
      "message0": "페널티킥 상태 입니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "is_closest_to_ball",
      "message0": "%1 %2 가 공에 가장 가깝습니다",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "is_close_to_ball",
      "message0": "%1 %2 가 공에 가장 가깝습니다",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "has_ball_possession",
      "message0": "공을 가지고 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "looking_to_target",
      "message0": "로봇이 목표물을 찾고 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "looking_to_ball",
      "message0": "로봇이 공을 찾고 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "looking_to_goal",
      "message0": "로봇이 골 기회를 찾고 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "looking_to_robot",
      "message0": "로봇이 로봇을 찾고 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "is_gk_in_goalcenter",
      "message0": "골키퍼가 골 센터 내에 있습니다",
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "robot_in_front_of_ball",
      "message0": "%1 %2 가 공 앞에 있습니다",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "robot_id",
          "check": "Number"
        }
      ],
      "inputsInline": true,
      "output": "Boolean",
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    },

    {
      "type": "printconsole",
      "message0": "%1 콘솔 인쇄(메세지 : %2)",
      "args0": [
        {
          "type": "input_dummy"
        },
        {
          "type": "input_value",
          "name": "message"
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "style": "environment_functions_blocks",
      "tooltip": "",
      "helpUrl": ""
    }
]);  // END JSON EXTRACT (Do not delete this comment.)
