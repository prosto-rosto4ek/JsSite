import { 
    createElementToEnd, 
    createElementToStart, 
    createElementWithText, 
    addCSSClass, 
    removeCSSClass, 
    setContent, 
    setEvent 
} from './htmlGenerater.js'; // укажи правильный путь к файлу с функциями

class User {
    constructor(userData) {
        this.id = userData.id;
        this.name = userData.name;
        this.username = userData.username;
        this.email = userData.email;
        this.address = userData.address;
        this.phone = userData.phone;
        this.website = userData.website;
        this.company = userData.company;
    }

    createUserOnMenu(container) {
        const userElement = createElementWithText("div", container, "userItem", this.username);
        userElement.id = `user${this.id}`;
        userElement.dataset.userId = this.id;
        
        // Добавляем дополнительную информацию при клике
        setEvent.call(userElement, 'click', () => {
            this.showUserDetails();
        });
        
        return userElement;
    }


}

// Функция для загрузки пользователей и создания меню
export async function loadUsersToMenu(containerId) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await response.json();
        
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Контейнер с id "${containerId}" не найден`);
            return;
        }

        const users = usersData.map(userData => new User(userData));
        
        users.forEach(user => {
            user.createUserOnMenu(container);
        });

        return users;
    } catch (error) {
        console.error('Ошибка при загрузке пользователей:', error);
    }
}

// Альтернативная функция для более гибкого использования
export function createUsersMenu(usersData, container) {
    return usersData.map(userData => {
        const user = new User(userData);
        return user.createUserOnMenu(container);
    });
}

export default User;