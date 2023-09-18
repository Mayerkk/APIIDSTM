new Vue({
    el: '#app',
    data: {
        formData: {
            email: '',
            password: ''
        },
        errorMessage: '',
        loggedIn: false,
        users: [] // Aquí almacenaremos los datos de usuarios desde el JSON local
    },
    created() {
        // Cargar los datos de usuarios desde el archivo JSON local
        fetch('usuarios.json')
            .then(response => response.json())
            .then(data => {
                this.users = data;
            });
    },
    methods: {
        login() {
            const { email, password } = this.formData;
            
            // Validar el inicio de sesión
            const user = this.users.find(user => user.email === email && user.password === password);

            if (user) {
                this.loggedIn = true;
                this.errorMessage = '';
            } else {
                this.loggedIn = false;
                this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
            }
        }
    }
});