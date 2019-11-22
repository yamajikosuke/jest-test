import parent from "./class";

class child extends parent{
    method_a(): string{
        let hoge = "child_method_a";
        return hoge;
    }
}

export default child;