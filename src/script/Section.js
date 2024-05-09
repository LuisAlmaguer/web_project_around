export class Section {
    consturctor({items, renderer}, selector){
        this.items = items;
        this.renderer = renderer;
        this.container = docuemnt.querySelector(selector);
    }

    renderer(){
        this.items.forEach((item) => this.renderer(item));
    }

    addItem(element){
        this.container.prepend(element)
    }
}



