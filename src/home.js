import React, { Component } from "react";
import { useState } from 'react'
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

export default class home extends Component {
    constructor(props) {
      super(props);
      this.items = [
          'Lemon',
          'bread',
          'rice',
      ];
      this.state = {
          suggestions: [],
        };
    }


  handleOnchange  =  val  => {
    setvalue(val)
  }

  options  = [
    { label:  'Option 1', value:  'option_1'  },
    { label:  'Option 2', value:  'option_2'  },
    { label:  'Option 3', value:  'option_3'  },
    { label:  'Option 4', value:  'option_4'  },
  ]
    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if(value.length === 0){
            this.setState(() => ({
                suggestions: [],
            }));

        } else {
            const regex = new RegExp('^$(value)', 'i');
            const suggestions = this.items.sort().filter(v => v.test(regex));
            this.setState(() => ({suggestions}));
        }
        

    }
    renderSuggestion () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return(
            <ul>
                {this.suggestions.map((item) => <li>{item}</li>)}
            </ul>
        )

    }
    render () {
        return (
            <div>
                <input onChange={(e) => console.log(e.target.value)} type="text"/>
                <ul>
                    {this.items.map((item) => <li>{item}</li>)}
                </ul>
            </div>
        )

    }
    

}
