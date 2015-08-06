/**
 +-----------------------------------------------+
 |          Created by jaehee                    |
 +-----------------------------------------------+
 */

Object.prototype.contain = function(neddle) {
    for(var keys in this){ // 메소드가 소속되어 있는 객체
        if(this[keys] === neddle){
            return true;
        }
    }
    return false;
}
var obj = {'name':'jaehee', 'city':'seoul'}
console.log(obj.contain('jaehee'));
var arr = ['jaehee','leezche','grapittie'];
console.log(arr.contain('leezche'));

for(var name in obj) {
    if(obj.hasOwnProperty(name)) {
        console.log(obj[name]);
    }
}


/* createNamespace */

var People = People || {};

People.createNamespace = function(namespace){
    var parts = namespace.split('.');
    var current = this;
    for(var keys in parts) {
        if(!current[parts[keys]]) {
            current[parts[keys]] = {};
        }
        current = current[parts[keys]];
    }
}



