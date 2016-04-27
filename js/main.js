var Student = {
    name: 'Bobby',
    age: 0,
    profilePic: 'bob.jpg',
    breed: "persian",
    weight: 3
};

$(document).ready(function(){

    var ageHolder = $('.ageHolder');
    var nameHolder = $('.nameHolder');
    var breedHolder = $('.breedHolder');
    var weightHolder = $('.weightHolder');
    var studentForm = $('.student');
    var button = $('.update');

    button.click(function(){
        console.log(Student);
        Student.age = Student.age + 1;
        Student.weight

        if(Student.age > 11 && Student.age < 25){
            Student.name = "Bob";
        } else if( Student.age > 25 && Student.age < 43){
            Student.name = "Robert";
        } else if( Student.age > 43 ){
            Student.name = "Julia";
            studentForm.removeClass('boy');
            studentForm.addClass('girl');
        }

        if(Student.age < 10){
        
            Student.weight = Student.weight + 2;
        
        } else if(Student.age > 10 && Student.age < 35){
        
            Student.weight = Student.weight + 1;
        
        } else if(Student.age > 35 && Student.age < 75){
        
            Student.weight = Student.weight + 0.5;
        
        } else {

            Student.weight = Student.weight - 2;

        }

        ageHolder.html(Student.age);
        nameHolder.html(Student.name);
        breedHolder.html(Student.breed);
        weightHolder.html(Student.weight + 'kg');
    });

});




