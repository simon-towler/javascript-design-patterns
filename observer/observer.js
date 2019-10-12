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
};

ObserverList.prototype.Empty = function(){
  //empties the ObserverList but does not return it
  this.observerList = [];
};

ObserverList.prototype.Count = function(){
  return this.observerList.length;
};

ObserverList.prototype.Get = function( index ){
  //gets the Observer at the given index
  if( index > -1 && index < this.observerList.length ){
    return this.observerList[ index ];
  }
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
};

ObserverList.prototype.RemoveIndexAt = function( index ){
  //pops or unshifts the given index if exists, but as a side-effect
  //returns nothing
  if( index === 0){
    this.observerList.shift();
  }else if( index === this.observerList.length -1 ){
    this.observerList.pop();
  }
};

// Extend an object with an extension
function extend( extension, obj ){
  //merges the given extension into the given object
  for ( var key in extension ){
    obj[key] = extension[key];
  }
}
