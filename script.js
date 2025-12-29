function getFormvalue() {
    let first = document.forms[0]["fname"].value.trim();
    let last = document.forms[0]["lname"].value.trim();
    
    alert(first + " " + last);
}
