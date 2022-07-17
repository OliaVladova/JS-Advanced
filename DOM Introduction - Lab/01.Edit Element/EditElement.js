function editElement(ref,match,replacer) {
    const text = ref.textContent;
    let toBeReplaced = new RegExp(match, 'g');
    let replaced = text.replace(toBeReplaced,replacer);
    ref.textContent = replaced;
}