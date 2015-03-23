Todos.Todo = DS.Model.extend({
  title: DS.attr("string"),
  isCompleted: DS.attr("boolean")
});

Todos.Todo.FIXTURES = [
{
  id: 1,
  title: "Learn Ember.js this weekend",
  isCompleted: true
},
{
  id: 2,
  title: "Pack clothes before I go to bed",
  isCompleted: false
},
{
  id: 3,
  title: "Brush teeth before I go to bed",
  isCompleted: false
}]