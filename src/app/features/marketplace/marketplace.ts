import { Component } from '@angular/core';
import { UserCard } from "./components/user-card/user-card";
import { User } from './models/user';
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-marketplace',
  imports: [UserCard, ProductList],
  templateUrl: './marketplace.html',
  styleUrl: './marketplace.css'
})
export class MarketplacePage {
user: User = { id: 0, firstName:'Alaaeddine', grade: 0, like: 0}

setGrade(value: number){
  this.user.grade = value
}

incrementLike(){
  this.user.like++
}
}
