import { atomFamily } from "recoil";
import { TODOS } from "./todos";
// give me the inputs of id and then the find logic will find the value with the same id and give it to you
// atomfamily lets us crreate multiple atoms dynamically  
export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: id => {
    return TODOS.find(x => x.id === id)
  },
});