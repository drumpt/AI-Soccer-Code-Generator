# AI World Cup Code Generator

## 1. Introduction
AI World Cup Code Generator is a web-based, visual programming editor for [AI World Cup](http://aiworldcup.org/) based on [google blockly](https://developers.google.com/blockly/). By using this tool, users can participate in AI World Cup without deep background for programming or machine learning.

## 2. How to use
AI World Cup Code Generator helps you make your own strategy with rule-based system and deep learning system. You can choose one of the strategy that you want.

### 2.1 Installation
1. Clone this repository.

### 2.2 Making your own strategy
1. Open ./blockly_demo/index.html. Suppose that the current directory is the outermost folder in this repository.
1. Choose the strategy between rule-based strategy and deep-learning system. The rule-based strategy consists of multiple if-else statements and deep learning strategy is based on reinforcement learning.  

<p align="center">
  <img src=./blockly_demo/img/index_page.png width="75%">
</p>  

### 2.3 Making rule-based strategy

<p align="center">
  <img src=./blockly_demo/img/rule_based_page.png width="75%">
</p>

1. For rule-based strategy, you need to define proper actions of 5 robots. You will use the **block-coding system** instead of writing the python code directly. Now the default code for each robot is to define actions for that robot based on the position of the ball. There are many categories in the left side. Below is the description for each category.
- **Environment indices** category contains indices of game status, and the ball.
- **Environment constants** category contains the variables that does not change over time. This includes field, goal, penalty area, goal area, robot size, and max linear velocity.
- **Environment variables** category contains the variables that changes over time constantly. This includes the position of current ball, predicted ball, current posture of own robot, and current posture of opposite robot.
- **Environment functions** category contains the helper functions that can be used in making your own strategy. The functions includes distance function, radian to degree function, degree to radian function, some functions that can check the position of the ball, get attack angle function, get defense angle function, set wheel velocity function, and printConsole function that can be used in debugging.
- **Logic** category contains if-else(or if-elif-else) statement, comparison statement, and/or statement, not statement, and boolean statement.
- **Loops** category contains for loop and while loop.
- **Math** category contains a number, arithmetic operators(+, -, ×, ÷, ^), and arithmetic functions(square root, absolute, exponential, logarithmic, trigonometric, inverse trigonometric function), and some other mathematical blocks.
- **Lists** category contains some blocks for list. You can create list, and apply some operators on that list.
- **Variables** category is for defining your own variable. You can define new variables and set or change as you want.
- **Functions** category is for defining your own function. You can define new functions and use them in your strategy.
2. After making your code for all robots, you can download files by clicking **Generate Code** button. The files include python files related to your strategy and some low-level functions used to run AI World Cup.

### 2.4 Making deep learning strategy

<p align="center">
  <img src=./blockly_demo/img/deep_learning_page.png width="75%">
</p>

1. For deep learning strategy, you can make reinforcement learning model based on template code that we provide. you can choose the number of robots to train (single-agent; train specific robot, or multi-agent; train all robots at the same time), reinforcement learning algorithm, state, action, reward function, algorithm parameters, and training parameters.
1. After choosing the conditions for reinforcement learning, you can also download files by clicking **Generate Code** button. The files include python files include python files related to your model, parameters, and some low-level functions used to run AI World Cup with deep-learning.

### 2.5 Execution

<p align="center">
  <img src=./blockly_demo/img/config_json.png width="50%">
</p>

1. After download the files from rule-based strategy or deep learning strategy, you need to unzip the compressed file and move it into **test_world-develop/examples_new** folder(or the folder that you implemented your previous strategy).
1. Open Webots simulator and change **"executable"** for team_a or team_b as **"examples_new/mystrategy/main.py"** in rule-based case or **"examples_new/mystrategy/train.py"** in deep learning case.

## 3. Further features to add

### 3.1 Rule-based strategy
- Develop 3-dimensional version.
- Change colors for categories and blocks.

### 3.2 Deep learning strategy
- Make default codes for all algorithms.**(Now deep learning part is not available)**

### 3.3 General features
- Modify and save default code.
- Local build using react or something.
