
import { Component } from '@angular/core';
import { trigger, transition, animate, keyframes, style } from '@angular/animations';
import { getLocaleDateFormat } from '@angular/common';




@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger("moveInLeft", [transition("void=> *", [style({ transform: "translateX(300px)" }),
  animate(200, keyframes([style({ transform: "translateX(300px)" }), 
  style({ transform: "translateX(0)" })]))]),
  transition("*=>void", [style({ transform: "translateX(0px)" }), 
  animate(100, keyframes([style({ transform: "translateX(0px)" }), 
  style({ transform: "translateX(300px)" })]))])])]
})

export class AppComponent {
  todoArray = []

  addTodo(value) {
    if (value=="")
    {
      alert("This field cannot be empty.")
    }
    else{
      var time = Date().toLocaleString()
      this.todoArray.push(value)
    }
    
  } 
  deleteItem(todo) {
 var confirmation = confirm("Are you sure you want to delete this item: " + "'"+todo+"'")
 {
   if (confirmation == true)
   {
    for (let i = 0; i < this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
   }
   else{
     alert("Thank you for not deleting me.")
   }
 }
    
  }

  todoSubmit(value: any) {
    if (value.todo == "" || value.todo==null) {
      alert('This field cannot be empty.')
    }
    else {
      this.todoArray.push(value.todo)
         
      
    }
  }
  openmodal(openwindow)
  {
    openwindow();
  }
}
