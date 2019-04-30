import axios from "axios";
const MockAdapter = require("axios-mock-adapter");
const mock = new MockAdapter(axios);

import { shallowMount } from "@vue/test-utils";

//import main content component with articles
import MainContent from "../src/components/MainContent";

describe("ArticlesList", () => {
  afterAll(() => {
    mock.restore();
  });
  beforeEach(() => {
    mock.reset();
  });

  it("loads articles", async () => {
    mock
      .onGet("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7a3d862b78044e49a716dbb9cf56460d")
      .reply(200);   //Test to check if status code of system is 200(http ok)

    const wrapper = shallowMount(MainContent);
    await wrapper.vm.loadUsers();
    const listItems = wrapper.findAll("li");
    expect(listItems).toHaveLength(3);
  });
});
