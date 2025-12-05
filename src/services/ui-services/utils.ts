export function show(pElement: HTMLElement){
    if(pElement.classList.contains('hidden')){
        pElement.classList.remove('hidden');
    }
}

export function hide(pElement: HTMLElement){
    if(!pElement.classList.contains('hidden')){
        pElement.classList.add('hidden');
    }
}