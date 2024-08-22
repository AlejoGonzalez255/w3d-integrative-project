import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

import { db } from "../../firebase.config";

class UserDAO {
    constructor() {
        this.collectionRef = collection(db, "users")
    }

    async getUserById(id){
        await getDoc(doc(this.collectionRef, id))
            .then((userDoc) =>{
                return userDoc.exists() ? { secess: true, data: userDoc.data()} : { secess: false, data:null }
            })
            .catch((error) =>{
                console.log("Error getting document:", error);
                
            })
    }

    async createUser(userData){
        await addDoc(this.collectionRef, userData)
            .then((docRef) => {
                console.log("Document written with ID: ", docRef);
            })
            .catch((error) =>{
                console.log("Error adding document: ", error);
                
            })
    }

    async updateUser(id, userData){
        const userRef = doc(this.collectionRef, id);
        await updateDoc(userRef, userData)
            .then(
                console.log("Document successfully updated!")
            )
            .catch( (error) => {
                console.log("Error updating docuemnt: ", error)
            });
    }

    async deleteUser(id) {
        await deleteDoc(doc(this.collectionRef, id))
          .then(
            console.log("Document successfully deleted!")
        )
          .catch((error) => {
            console.error("Error removing document: ", error);
          });
      }
}

export default new UserDAO();