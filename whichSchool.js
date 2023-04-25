const whichSchool  = function(age){
switch (age){
  case age<13:
    return "Elementary School";
  case age>=13 && age<=18:
    return "Secondary School";
  case age>18||age<0:
    return "Lighthouse Labs";
}
};
age=12;