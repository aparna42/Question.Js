class Question {

  constructor() {
    this.title = createElement('h1')

    //Create a input box to enter the name
    this.input1 = createInput("Enter Your Name Here....");
    //Create a input box to enter the option
    this.input2 = createInput("Enter Correct Option No..");

    this.message = createElement("h2")

    //Create elements for ONE question (h3) and FOUR options (h4)

    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4'); /*---> The names must be different*/

    this.button = createButton('Submit');
  }

  hide() {
    //Add hide() for questions, options & input box
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide()

  }

  display() {
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.

    //Changed property names to to this.question and option1-4
    this.question.html("what is the most popular game ever")
    this.option1.html("A-Minecraft")
    this.option2.html("B-Fortnite")
    this.option3.html("C-Roblox")
    this.option4.html("D-The Zelda Series")

    //Changed property names and positions
    this.question.position(150, 80)
    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(350, 230);
    this.option1.position(150, 100);
    this.option2.position(150, 120);
    this.option3.position(150, 140);
    this.option4.position(150, 160);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(() => {

      /* Write the following code to complete the project:
      
      1. Change this.message's html to "Thank You, Your Answer Has Been Submitted"
      2. Position it correctly on the screen
      
      */
    })


  }
}
