function quicksort(arr) {
    
    let stack = [[0, arr.length - 1]]
    
    while (stack.length > 0){
        let [lidx, ridx] = stack.pop();
        
        if (lidx >= ridx) {continue;}
        let pivot = arr[ridx];
        let less = lidx - 1;

        for (let i = lidx; i < ridx; i++){
            if (arr[i] <= pivot){
                let tmp = arr[i];
                arr[i] = arr[++less];
                arr[less] = tmp;
            }
        }
        arr[ridx] = arr[less + 1];
        arr[less + 1] = pivot;

        stack.push([lidx, less]);
        stack.push([less + 1, ridx]);
    }
    return arr;
}
