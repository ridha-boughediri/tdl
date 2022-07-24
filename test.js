document.addEventListener('DOMContentLoaded', () => {
    const todos = document.querySelectorAll('.todo'); 
    const all_status = document.querySelectorAll('.status'); // Récupère les différentes colonnes
    let draggableTodo = null;
    
    todos.forEach(todo => { // Foreach pour attribuer le drag & drop à chaque tâches
        todo.addEventListener('dragstart', dragStart);
        todo.addEventListener('dragend', dragEnd);
    });
    
    function dragStart() { // Fonction qui lance le drag&drop
        draggableTodo = this;
    }
    
    function dragEnd(e) { // Fonction qui arrête le drag&drop
        draggableTodo = null;
    }
    
    all_status.forEach(status => { //Attribue la possibilité de drag à chaque colonne
        status.addEventListener('dragover', dragOver);
        status.addEventListener('dragenter', dragEnter);
        status.addEventListener('dragleave', dragLeave);
        status.addEventListener('drop', dragDrop);
    })
    
    function dragOver(e) {
       e.preventDefault(); //Evite le rechargement au lachement du drag
    }
    
    function dragEnter() { // Fonction pour passer de colonne en colonne
        this.style.border = "1px dashed #ccc"; //Style pour visualiser le mouvement
    }
    
    function dragLeave() {
        this.style.border = "none"; // Style lorsqu'on sort d'une colonne
    }
    
    function dragDrop() {
        this.style.border = "none"; // Style lorsqu'on lache une task
        this.appendChild(draggableTodo); // Laisse la task où elle a été lachée
    }
    
    /* Modal*/
    const btns = document.querySelectorAll('[data-target-modal]');
    const close_btns = document.querySelectorAll('.close-modal');
    const overlay = document.querySelector('#overlay');
    
    
    btns.forEach((btn) => {
        btn.addEventListener('click', ()=> {
            document.querySelector(btn.dataset.targetModal).classList.add("active");
            overlay.classList.add("active");
        });
    });
    
    close_btns.forEach((btn) => {
        btn.addEventListener('click', ()=> {
            document.querySelector(btn.dataset.targetModal).classList.remove("active");
            overlay.classList.remove('active');
        });
    });
    
    window.onclick = (event) => {
        if(event.target == overlay) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach((modal) => modal.classList.remove('active'));
            overlay.classList.remove('active');
        }
    }
    
    const todo_submit = document.getElementById('todo_submit');
    
    todo_submit.addEventListener('click', createTodo);
    
    var myDate = new Date();
    var annee = myDate.getFullYear();
            var listeMois= ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
            var mois = listeMois[myDate.getMonth()];
            var jourNumero = myDate.getDate();
            var listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
            var jourNom = listeJours[myDate.getDay()];
            var deuxChiffres = function(element){
                if(element < 10) {
                    return element = "0" + element;
                } else {
                    return element;
                }
            }
            var heures = deuxChiffres(myDate.getHours());
            var minutes = deuxChiffres(myDate.getMinutes());
            var secondes = deuxChiffres(myDate.getSeconds());
    
    function createTodo() {
        const todo_div = document.createElement('div');
        const inpul_val = document.getElementById('todo_input').value + "  " + 
                        "Le" + " " + jourNom + " " + " " 
                        + jourNumero + mois + " " + annee 
                        + " " + "à" + " " + heures + ":" 
                        + minutes +":" + secondes;
        const txt = document.createTextNode(inpul_val);
    
        todo_div.appendChild(txt);
        todo_div.classList.add("todo");
        todo_div.setAttribute("draggable", "true");
    
        const span = document.createElement('span');
        const span_txt = document.createTextNode("\u00D7");
        span.classList.add("close");
        span.appendChild(span_txt);
    
        todo_div.appendChild(span);
        no_status.appendChild(todo_div);
    
        span.addEventListener('click', () => {
            span.parentElement.style.display = "none";
        })
    
        todo_div.addEventListener("dragstart", dragStart);
        todo_div.addEventListener("drageng", dragEnd);
    
        document.getElementById("todo_input").value = "";
    
        todo_form.classList.remove('active');
        overlay.classList.remove('active');
    
    }
    
    const close_btn = document.querySelectorAll('.close');
    
    close_btn.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.parentElement.style.display = "none";
        })
    })
    
    var deco = document.getElementById('deco');
    let todo = document.getElementsByClassName('todo');
    // const local = JSON.parse(localStorage.getItem('faire'))
    
    
        // deco.onclick = () => {
        //     const faire = {
        //         task: no_status.value,
        //     }
        //     localStorage.setItem('faire', JSON.stringify(faire));
        // }
    
        if(localStorage.getItem('nom') != null)
        span.textContent = `${localStorage.getItem('nom')}`;
        bouton.onclick = () => {
            localStorage.setItem('nom', nom.value);
            document.location.reload();
        }
    });