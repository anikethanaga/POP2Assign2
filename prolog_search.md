
##  Code

  

    member(X, [Y|T]) :-
    
    X = Y;
    
    member(X, T).

  

  

##  Query

  

    ?- member(2,[1,2,3,4]).

