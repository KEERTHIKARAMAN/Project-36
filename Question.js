class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
    this.message = createElement("h1")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(690, 0);

     this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
     this.question.html("Question:- What is the word that give meaning has thankyou. but has only 4 letters? " );

     this.question.html("Question:- What starts and ends with the letter ‘s’, and give meaning yes!. but has only one letter? " );


    this.question.position(150, 80);
    this.option1.html("1: Everyone " );

    this.option1.position(150, 115);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 135);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 155);
    this.option4.html("4: Example" );
    this.option4.position(150, 175);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(550, 300);

    this.button.mousePressed(()=>{
      
       this.message.html("Thank You, Your Answer Has Been Submitted");
       this.message.position(800, 600);

    });
  }
}
