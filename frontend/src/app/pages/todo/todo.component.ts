import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TodoService } from '../../pages/shared/todo.service';
import { Todo } from '../../pages/shared/todo.model';
@Component({
  selector: 'ngx-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {


   isUpdate: boolean = false;
  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshTodoList();
  }

  resetForm(form?: NgForm) {
    if(form)
      form.reset(this.todoService.selectedTodo);
      this.todoService.selectedTodo = {
        _id: "",
        task: ""
      }
  }

  onSubmit(form : NgForm){
    if(form.value._id == ""){
    this.todoService.postTodo(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshTodoList();
      // this.snackBar.open('Saved successfully', 'OK', {
      //   duration: 3000
      // })
    });
  }
  else {
    this.todoService.putTodo(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshTodoList();
      // this.snackBar.open('Updated successfully', 'OK', {
      //   duration: 3000
      // })
    });
  }
  }

  onUpdate(form : NgForm){
    if(form.value._id == ""){
      this.todoService.postTodo(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTodoList();
        // this.snackBar.open('Saved successfully', 'OK', {
        //   duration: 3000
        // })
      });
    }
    else {
      this.todoService.putTodo(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshTodoList();
        // this.snackBar.open('Updated successfully', 'OK', {
        //   duration: 3000
        // })
      });
    }
  }
  

  refreshTodoList() {
    this.todoService.getTodoList().subscribe((res) => {
      this.todoService.todo = res as Todo[];
    });
  }

  onEdit(todo : Todo){
    this.todoService.selectedTodo = todo;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.todoService.deleteTodo(_id).subscribe((res) => {
        this.refreshTodoList();
        this.resetForm(form);
        // this.snackBar.open('Deleted successfully', 'OK', {
        //   duration: 3000
        // })
      });
    }
  }
}
