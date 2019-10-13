//model the list of dependent observers a subject may have

function ObserverList() {
  this.observerList = [];
}

/*
  Add
  Empty
  Count
  Get
  Insert
  IndexOf
  RemoveIndexAt
  extend
*/

ObserverList.prototype.Add = function( obj ){
  //push the given obj and return the new length of ObserverList
  return this.observerList.push( obj );
  console.log("ObserverList.Add called.");
};

ObserverList.prototype.Empty = function(){
  //empties the ObserverList but does not return it
  this.observerList = [];
  console.log("ObserverList.Empty called.");
};

ObserverList.prototype.Count = function(){
  return this.observerList.length;
  console.log("ObserverList.Count called.");
};

ObserverList.prototype.Get = function( index ){
  //gets the Observer at the given index
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
  console.log("ObserverList.Get called");
};

ObserverList.prototype.Insert = function( obj, index ){
  //Inserts obj either at 0, replacing, or at end, adding.
  var pointer = -1;

  if( index === 0 ){
    this.observerList.unshift( obj );
    pointer = index;
  }else if( index === this.observerList.length ){
    this.observerList.push( obj );
    pointer = index;
  }

  return pointer;
  console.log("ObserverList.Insert called.");
};

ObserverList.prototype.IndexOf = function( obj, startIndex ){
  //searches ObserverList from startIndex and returns index of obj, if found, -1 if not
  var i = startIndex, pointer = -1;

  while( i < this.observerList.length ){
    if( this.observerList[i] === obj ){
      pointer = i;
    }
    i++;
  }

  return pointer;
  console.log("ObserverList.IndexOf called.");
};

ObserverList.prototype.RemoveIndexAt = function( index ){
  //pops or unshifts the given index if exists, but as a side-effect
  //returns nothing
  if( index === 0){
    this.observerList.shift();
  }else if( index === this.observerList.length -1 ){
    this.observerList.pop();
  }
  console.log("ObserverList.RemoveIndexAt called.");
};

// Extend an object with an extension
function extend( extension, obj ){
  //merges the given extension into the given object
  for ( var key in extension ){
    obj[key] = extension[key];
  }
  console.log("function extend called.");
}

/* Model the subject
 * and the ability to add, remove, or notify observers on the observer list.*/

 function Subject(){
   this.observers = new ObserverList();
   console.log("New Subject instantiated.");
 }

 Subject.prototype.AddObserver = function( observer ){
   this.observers.Add( observer );
   console.log("Subject.AddObserver called.");
 };

 Subject.prototype.RemoveObserver = function( observer ){
   this.observers.RemoveAt( this.observers.IndexOf( observer, 0) );
   console.log("Subjecct.RemoveObserver called.");
 };

 Subject.prototype.Notify = function( context ){

   //take a snapshot of observers.Count at the start of the loop
   var observerCount = this.observers.Count();

   /* get each observer in the list in turn
    * and call .Update on it
    * passing in a context
    */
   for(var i=0; i < observerCount; i++){
     this.observers.Get(i).Update( context );
   }
   console.log("Subject.Notify called.");
 }

 /* Define a skeleton for creating new Observers.
  * The Update funcitonality here will be overwritten
  * later with custom behaviour.
  */

  //The Observer
  function Observer(){
    this.Update = function(){
      //Abstract. Will be implemented by Concretions
    };
    console.log("New Observer instantiated.");
  }
