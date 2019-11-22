class A
{
    public a:number;
    constructor(){
        this.a = 1;
    }
    method_a(): string{
        let hoge = "parent_method_a";
        return hoge;
    }

    method_b(): string{
        let hoge = "parent_method_b";
        return hoge;
    }
}

export default A