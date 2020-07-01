import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    count: 8,
    listPlanned: [
      { img: 'https://miro.medium.com/max/1012/1*-megf8HNfr-mcoirvJVb0w.png', target: 'Learn VueJS', desc: 'I want know VueJS!!!', id: 0 },
      { img: 'https://mcdn.tvzvezda.ru/storage/news_other_images/2019/09/22/15662946a9ed49da860eb58c261f1918.jpg', target: 'Slope away from the army', desc: 'I slope away from the army!!!', id: 1 },
      { img: 'https://longreadsblog.files.wordpress.com/2018/01/gettyimages-89186539.jpg?w=1200', target: 'Die beautifully', desc: 'I die beautifully...', id: 2 }
    ],
    listInWork: [
      { img: 'https://miro.medium.com/max/1012/1*-megf8HNfr-mcoirvJVb0w.png', target: 'Learn VueJS', desc: 'I want know VueJS!!!', id: 3 },
      { img: 'https://mcdn.tvzvezda.ru/storage/news_other_images/2019/09/22/15662946a9ed49da860eb58c261f1918.jpg', target: 'Slope away from the army', desc: 'I slope away from the army!!!', id: 4 },
      { img: 'https://longreadsblog.files.wordpress.com/2018/01/gettyimages-89186539.jpg?w=1200', target: 'Die beautifully', desc: 'I die beautifully...', id: 5 }
    ],
    listCompleted: [
      { img: 'https://miro.medium.com/max/1012/1*-megf8HNfr-mcoirvJVb0w.png', target: 'Learn VueJS', desc: 'I want know VueJS!!!', id: 6 },
      { img: 'https://mcdn.tvzvezda.ru/storage/news_other_images/2019/09/22/15662946a9ed49da860eb58c261f1918.jpg', target: 'Slope away from the army', desc: 'I slope away from the army!!!', id: 7 },
      { img: 'https://longreadsblog.files.wordpress.com/2018/01/gettyimages-89186539.jpg?w=1200', target: 'Die beautifully', desc: 'I die beautifully...', id: 8 }
    ]
  },
  mutations: {
    removeElement(state, id) {
      let active = true
      state.listPlanned.forEach(el => {
        if (active) {
          if (el.id == id) {
            active = false
            state.listPlanned = state.listPlanned.filter(function (el) { if (el.id == id) { return false } else { return true } })
          }
        }
      });
      state.listInWork.forEach(el => {
        if (active) {
          if (el.id == id) {
            active = false
            state.listInWork = state.listInWork.filter(function (el) { if (el.id == id) { return false } else { return true } })
          }
        }
      });
      state.listCompleted.forEach(el => {
        if (active) {
          if (el.id == id) {
            active = false
            state.listCompleted = state.listCompleted.filter(function (el) { if (el.id == id) { return false } else { return true } })
          }
        }
      });
    },
    editList(state, element) {
      let active = true
      state.listPlanned.forEach(el => {
        if (active) {
          if (el.id == element.id) {
            active = false
            el[element.name] = element.value
          }
        }
      });
      state.listInWork.forEach(el => {
        if (active) {
          if (el.id == element.id) {
            active = false
            el[element.name] = element.value
          }
        }
      });
      state.listCompleted.forEach(el => {
        if (active) {
          if (el.id == element.id) {
            active = false
            el[element.name] = element.value
          }
        }
      });
    },
    updateListPlanned(state, list) {
      state.listPlanned = list
    },
    updateListInWork(state, list) {
      state.listInWork = list
    },
    updateListCompleted(state, list) {
      state.listCompleted = list
    },
    addElement(state, list) {
      state.count++
      state[list].unshift({ img: 'https://miro.medium.com/max/1012/1*-megf8HNfr-mcoirvJVb0w.png', target: 'Learn VueJS', desc: 'I want know VueJS!!!', id: state.count })
    }
  },
});