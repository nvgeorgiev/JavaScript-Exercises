export function create(data) {
  return firebase.firestore().collection('articles').add(data);
}
export function getAll() {
  return firebase.firestore().collection('articles').get();
}
export function get(id) {
  return firebase.firestore().collection('articles').doc(id).get();
}
export function remove(id) {
  return firebase.firestore().collection('articles').doc(id).delete();
}
export function update(id, data) {
  return firebase.firestore().collection('articles').doc(id).update(data);
}
