import _ from 'lodash';

const REQUIRED = 'required';
const MIN = 'min';
const MAX = 'max';
const NUMBER = 'number';

const RULE = [
    {
        name: REQUIRED,
        func: function(label = 'Input') { 
            return function() {
                return (v) => !!v || `${label} is required`
            }
        }
    },
    {
        name: MIN, 
        func: function(label = 'Input', min) {
            return function() {
                return (v) => (!!v && v.length > min) || `${label} must be more than ${min} characters`
            }
        }
    },
    {
        name: MAX,
        func: function(label = 'Input', max) {
            return function () {
                return (v) => (!!v && v.length < max) || `${label} must be less than ${max} characters`
            }
        }
    },
    {
        name: NUMBER,
        func: function(label = 'Input') {
            return function() {
                return (v) => (!isNaN(Number(v))) || `${label} must be a number`      
            }
        }
    }
]

class Validation {
    ruleInput = {};

    // label                                            ||
    // rules: ['required', ['min', 5], ['max': 5] ]     || => Object rule
    // name                                             ||
    
    scanRules(listValidation) {

        _.forEach(listValidation, (objRule) => {
            var listRule = objRule.rules;
            
            _.forEach(listRule, (rule) => {
                let ruleName = rule;
                let options =  (_.isArray(ruleName) && ruleName[1] != 'undefined') ? ruleName[1]: null;
                if (_.isArray(ruleName)) {
                    ruleName = ruleName[0];
                } 
                let result = this.findRule(ruleName);
                if (typeof result != 'undefined') {
                    var validate = result.func(objRule.label, options)();
                
                    this.pushResult(objRule.name, validate);
                }   
                    
            }) 
        }) 
    }
    
    // find rule
    findRule(ruleName) {
        var rule = RULE.find((item) => {
            if (item.name == ruleName) {
                return item;
            }
        })
        return rule;     
    }

    // push result
    pushResult(keyName, func) {
      
        if (keyName in this.ruleInput) { 
            this.ruleInput[keyName].push(func);
        } else {
            this.ruleInput[keyName] = [func];
        }
       
    }
    // get list validation
    getList() {
        return this.ruleInput;
    }
}


export default Validation