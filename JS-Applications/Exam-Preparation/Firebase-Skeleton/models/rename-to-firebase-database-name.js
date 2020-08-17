export function create(data) {
    return firebase.firestore().collection('rename-to-firebase-database-name').add(data)
}
export function getAll() {
    return firebase.firestore().collection('rename-to-firebase-database-name').get()
}
export function get(id) {
    return firebase.firestore().collection('rename-to-firebase-database-name').doc(id).get()
}
export function remove(id) {
    return firebase.firestore().collection('rename-to-firebase-database-name').doc(id).delete()
}
export function update(id, data) {
    return firebase.firestore().collection('rename-to-firebase-database-name').doc(id).update(data)
}