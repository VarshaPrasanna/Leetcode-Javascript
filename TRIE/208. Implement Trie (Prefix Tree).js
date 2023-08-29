
/*

To search for a string in a trie, we start at the root node and follow the links
 for each character in the string. If we reach a leaf node, then the string is present in the trie. 
 Otherwise, the string is not present in the trie.

Breaking down the question

What has to be done?
Implement a Trie (Prefix Tree)

What is is a Trie?
A trie is a rooted tree, where each node of the tree represents a character in the alphabet.
The root node represents the empty string. Each child node of a node represents the next character
in the alphabet.

What is Given ?

1.  Trie() : Given a trie object
2. insert :Write a function to insert a word in to trie
3. boolean search search for a string and return true if the string word is in the trie, and false otherwise.
4. boolean starts With:Search and  Returns true if there is a previously inserted string word that has the prefix, and false otherwise.
 


*/
class Trie{
    constructor(){
        this.root={}
    }
    insert(word){
        let node=this.root
        for(let char of word){
            if(!node[char]){
                node[char]={}
            }
            node=node[char]
        }
        node.isEnd=true
    }
    search(word){
        let node=this.root
        for(let char of word){
            if(!node[char]){
                return false
            }
            node=node[char]
        }
        return node.isEnd==true
    }
    startsWith(prefix){
        let node=this.root
        for(let char of prefix){
            if(!node[char]){
                return false
            }
            node=node[char]
        }
        return true
    }
}
