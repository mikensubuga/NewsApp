import Vue from "vue";
import App from "../src/App";

describe("App.test.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(App); // Create a copy of the original component
    vm = new cmp({
      data: {
        // test data
        articles: []
      }
    }).$mount(); // Instances and mounts the component
  });

  it('equals messages to ["Cat"]', () => {
    expect(vm.articles).toEqual([""]);
  });
});
