import {r as X, R as si} from "./components-BQ94cas1.js";
(function() {
    try {
        var t = typeof window < "u"
  ?
  window
  :
  typeof
  global
<"u"
  ?
  global
  :
  typeof
  self
<"u"
  ?
  self
  :
  {}
  ,
  e=new
  Error().stack;
  e
  &&
  (t._sentryDebugIds=t._sentryDebugIds
  ||
  {},
  t._sentryDebugIds[e]="abb1548a-9fbd-4cf7-9148-f7438ae3e657"
  ,
  t._sentryDebugIdIdentifier="sentry-dbid-abb1548a-9fbd-4cf7-9148-f7438ae3e657"
  )
  }
  catch
  {}
  }
  )();
  *!
  *****************************************************************************
  Copyright
  (c)
  Microsoft
  Corporation.
  Permission
  to
  use,
  copy,
  modify,
  and
  or
  distribute
  this
  software
  for
  any
  purpose
  with
  or
  without
  fee
  is
  hereby
  granted.
  THE
  SOFTWARE
  IS
  PROVIDED"AS IS"
  AND
  THE
  AUTHOR
  DISCLAIMS
  ALL
  WARRANTIES
  WITH
  REGARD
  TO
  THIS
  SOFTWARE
  INCLUDING
  ALL
  IMPLIED
  WARRANTIES
  OF
  MERCHANTABILITY
  AND
  FITNESS.
  IN
  NO
  EVENT
  SHALL
  THE
  AUTHOR
  BE
  LIABLE
  FOR
  ANY
  SPECIAL,
  DIRECT,
  INDIRECT,
  OR
  CONSEQUENTIAL
  DAMAGES
  OR
  ANY
  DAMAGES
  WHATSOEVER
  RESULTING
  FROM
  LOSS
  OF
  USE,
  DATA
  OR
  PROFITS,
  WHETHER
  IN
  AN
  ACTION
  OF
  CONTRACT,
  NEGLIGENCE
  OR
  OTHER
  TORTIOUS
  ACTION,
  ARISING
  OUT
  OF
  OR
  IN
  CONNECTION
  WITH
  THE
  USE
  OR
  PERFORMANCE
  OF
  THIS
  SOFTWARE.
  *****************************************************************************
  *
  var
  un=function(t,
  e)
  {
  return
  un=Object.setPrototypeOf
  ||
  {
  __proto__:
  []
  }instanceof
  Array
  &&
  function(n,
  r)
  {
  n.__proto__=r
  }
  ||
  function(n,
  r)
  {
  for
  (var
  o
  in
  r)
  Object.prototype.hasOwnProperty.call(r,
  o)
  &&
  (n[o]=r[o])
  }
  ,
  un(t,
  e)
  };
  function
  ui(t,
  e)
  {
  if
  (typeof
  e
  !="function"
  &&
  e
  !==null)
  throw
  new
  TypeError("Class
  extends
  value" + String(e) + "
  is
  not
  a
  constructor
  or
  null");
  un(t,
  e);
  function
  n()
  {
  this.constructor=t
  }
  t.prototype=e===
  null?
  Object.create(e)
  :
  (n.prototype=e.prototype,
  new
  n)
  }
  var
  F=function()
  {
  return
  F=Object.assign
  ||
  function(e)
  {
  for
  (var
  n,
  r=1,
  o=arguments.length;
  r
<
  o;
  r++)
  {
  n=arguments[r];
  for
  (var
  a
  in
  n)
  Object.prototype.hasOwnProperty.call(n,
  a)
  &&
  (e[a]=n[a])
  }
  return
  e
  }
  ,
  F.apply(this,
  arguments)
  };
  function
  Un(t,
  e)
  {
  var
  n={};
  for
  (var
  r
  in
  t)
  Object.prototype.hasOwnProperty.call(t,
  r)
  &&
  e.indexOf(r)
<
  0
  &&
  (n[r]=t[r]);
  if
  (t
  !=null
  &&
  typeof
  Object.getOwnPropertySymbols=="function"
  )
  for
  (var
  o=0,
  r=Object.getOwnPropertySymbols(t);
  o
<
  r.length;
  o++)
  e.indexOf(r[o])
<
  0
  &&
  Object.prototype.propertyIsEnumerable.call(t,
  r[o])
  &&
  (n[r[o]]=t[r[o]]);
  return
  n
  }
  function
  ee(t,
  e,
  n,
  r)
  {
  function
  o(a)
  {
  return
  a
  instanceof
  n
  ?
  a
  :
  new
  n(function(i)
  {
  i(a)
  }
  )
  }
  return
  new
  (n
  ||
  (n=Promise))(function(a,
  i)
  {
  function
  u(l)
  {
  try
  {
  c(r.next(l))
  }
  catch
  (f)
  {
  i(f)
  }
  }
  function
  s(l)
  {
  try
  {
  c(r.throw(l))
  }
  catch
  (f)
  {
  i(f)
  }
  }
  function
  c(l)
  {
  l.done
  ?
  a(l.value)
  :
  o(l.value).then(u,
  s)
  }
  c((r=r.apply(t,
  [])).next())
  }
  )
  }
  function
  ne(t,
  e)
  {
  var
  n={
  label:
  0,
  sent:
  function()
  {
  if
  (a[0]
  &
  1)
  throw
  a[1];
  return
  a[1]
  },
  trys:
  [],
  ops:
  []
  },
  r,
  o,
  a,
  i;
  return
  i={
  next:
  u(0),
  throw:
  u(1),
  return:
  u(2)
  },
  typeof
  Symbol=="function"
  &&
  (i[Symbol.iterator]=function()
  {
  return
  this
  }
  ),
  i;
  function
  u(c)
  {
  return
  function(l)
  {
  return
  s([c,
  l])
  }
  }
  function
  s(c)
  {
  if
  (r)
  throw
  new
  TypeError("Generator
  is
  already
  executing.");
  for
  (;
  n;
  )
  try
  {
  if
  (r=1,
  o
  &&
  (a=c[0]
  &
  2
  ?
  o.return
  :
  c[0]
  ?
  o.throw
  ||
  ((a=o.return)
  &&
  a.call(o),
  0)
  :
  o.next)
  &&
  !(a=a.call(o,
  c[1])).done)
  return
  a;
  switch
  (o=0,
  a
  &&
  (c=[c[0]
  &
  2,
  a.value]),
  c[0])
  {
  case
  0:
  case
  1:
  a=c;
  break;
  case
  4:
  return
  n.label++,
  {
  value:
  c[1],
  done:
  !1
  };
  case
  5:
  n.label++,
  o=c[1],
  c=[0];
  continue;
  case
  7:
  c=n.ops.pop(),
  n.trys.pop();
  continue;
  default:
  if
  (a=n.trys,
  !(a=a.length> 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
                        n = 0;
                        continue
                    }
                    if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3]))
	  {
	  n.label=c[1];
	  break
	  }
	  if
	  (c[0]===6
	  &&
	  n.label
	<
	  a[1])
	  {
	  n.label=a[1],
	  a=c;
	  break
	  }
	  if
	  (a
	  &&
	  n.label
	<
	  a[2])
	  {
	  n.label=a[2],
	  n.ops.push(c);
	  break
	  }
	  a[2]
	  &&
	  n.ops.pop(),
	  n.trys.pop();
	  continue
	  }
	  c=e.call(t,
	  n)
	  }
	  catch
	  (l)
	  {
	  c=[6,
	  l],
	  o=0
	  }
	  finally
	  {
	  r=a=
	  0}
	  if
	  (c[0]
	  &
	  5)
	  throw
	  c[1];
	  return
	  {
	  value:
	  c[0]
	  ?
	  c[1]
	  :
	  void
	  0,
	  done:
	  !0
	  }
	  }
	  }
	  *!
	  *****************************************************************************
	  Copyright
	  (c)
	  Microsoft
	  Corporation.
	  Permission
	  to
	  use,
	  copy,
	  modify,
	  and
	  or
	  distribute
	  this
	  software
	  for
	  any
	  purpose
	  with
	  or
	  without
	  fee
	  is
	  hereby
	  granted.
	  THE
	  SOFTWARE
	  IS
	  PROVIDED"AS IS"
	  AND
	  THE
	  AUTHOR
	  DISCLAIMS
	  ALL
	  WARRANTIES
	  WITH
	  REGARD
	  TO
	  THIS
	  SOFTWARE
	  INCLUDING
	  ALL
	  IMPLIED
	  WARRANTIES
	  OF
	  MERCHANTABILITY
	  AND
	  FITNESS.
	  IN
	  NO
	  EVENT
	  SHALL
	  THE
	  AUTHOR
	  BE
	  LIABLE
	  FOR
	  ANY
	  SPECIAL,
	  DIRECT,
	  INDIRECT,
	  OR
	  CONSEQUENTIAL
	  DAMAGES
	  OR
	  ANY
	  DAMAGES
	  WHATSOEVER
	  RESULTING
	  FROM
	  LOSS
	  OF
	  USE,
	  DATA
	  OR
	  PROFITS,
	  WHETHER
	  IN
	  AN
	  ACTION
	  OF
	  CONTRACT,
	  NEGLIGENCE
	  OR
	  OTHER
	  TORTIOUS
	  ACTION,
	  ARISING
	  OUT
	  OF
	  OR
	  IN
	  CONNECTION
	  WITH
	  THE
	  USE
	  OR
	  PERFORMANCE
	  OF
	  THIS
	  SOFTWARE.
	  *****************************************************************************
	  *
	  var
	  ln=function(t,
	  e)
	  {
	  return
	  ln=Object.setPrototypeOf
	  ||
	  {
	  __proto__:
	  []
	  }instanceof
	  Array
	  &&
	  function(n,
	  r)
	  {
	  n.__proto__=r
	  }
	  ||
	  function(n,
	  r)
	  {
	  for
	  (var
	  o
	  in
	  r)
	  Object.prototype.hasOwnProperty.call(r,
	  o)
	  &&
	  (n[o]=r[o])
	  }
	  ,
	  ln(t,
	  e)
	  };
	  function
	  Wt(t,
	  e)
	  {
	  if
	  (typeof
	  e
	  !="function"
	  &&
	  e
	  !==null)
	  throw
	  new
	  TypeError("Class
	  extends
	  value" + String(e) + "
	  is
	  not
	  a
	  constructor
	  or
	  null");
	  function
	  n()
	  {
	  this.constructor=t
	  }
	  ln(t,
	  e),
	  t.prototype=e===
	  null?
	  Object.create(e)
	  :
	  (n.prototype=e.prototype,
	  new
	  n)
	  }
	  var
	  _=function()
	  {
	  return
	  _=Object.assign
	  ||
	  function(t)
	  {
	  for
	  (var
	  e,
	  n=1,
	  r=arguments.length;
	  n
	<
	  r;
	  n++)
	  for
	  (var
	  o
	  in
	  e=arguments[n])
	  Object.prototype.hasOwnProperty.call(e,
	  o)
	  &&
	  (t[o]=e[o]);
	  return
	  t
	  }
	  ,
	  _.apply(this,
	  arguments)
	  };
	  function
	  D(t,
	  e)
	  {
	  var
	  n={};
	  for
	  (var
	  r
	  in
	  t)
	  Object.prototype.hasOwnProperty.call(t,
	  r)
	  &&
	  e.indexOf(r)
	<
	  0
	  &&
	  (n[r]=t[r]);
	  if
	  (t
	  !=null
	  &&
	  typeof
	  Object.getOwnPropertySymbols=="function"
	  )
	  {
	  var
	  o=0;
	  for
	  (r=Object.getOwnPropertySymbols(t);
	  o
	<
	  r.length;
	  o++)
	  e.indexOf(r[o])
	<
	  0
	  &&
	  Object.prototype.propertyIsEnumerable.call(t,
	  r[o])
	  &&
	  (n[r[o]]=t[r[o]])
	  }
	  return
	  n
	  }
	  function
	  O(t,
	  e,
	  n,
	  r)
	  {
	  return
	  new
	  (n
	  ||
	  (n=Promise))(function(o,
	  a)
	  {
	  function
	  i(c)
	  {
	  try
	  {
	  s(r.next(c))
	  }
	  catch
	  (l)
	  {
	  a(l)
	  }
	  }
	  function
	  u(c)
	  {
	  try
	  {
	  s(r.throw(c))
	  }
	  catch
	  (l)
	  {
	  a(l)
	  }
	  }
	  function
	  s(c)
	  {
	  var
	  l;
	  c.done
	  ?
	  o(c.value)
	  :
	  (l=c.value,
	  l
	  instanceof
	  n
	  ?
	  l
	  :
	  new
	  n(function(f)
	  {
	  f(l)
	  }
	  )).then(i,
	  u)
	  }
	  s((r=r.apply(t,
	  [])).next())
	  }
	  )
	  }
	  function
	  C(t,
	  e)
	  {
	  var
	  n,
	  r,
	  o,
	  a,
	  i={
	  label:
	  0,
	  sent:
	  function()
	  {
	  if
	  (1
	  &
	  o[0])
	  throw
	  o[1];
	  return
	  o[1]
	  },
	  trys:
	  [],
	  ops:
	  []
	  };
	  return
	  a={
	  next:
	  u(0),
	  throw:
	  u(1),
	  return:
	  u(2)
	  },
	  typeof
	  Symbol=="function"
	  &&
	  (a[Symbol.iterator]=function()
	  {
	  return
	  this
	  }
	  ),
	  a;
	  function
	  u(s)
	  {
	  return
	  function(c)
	  {
	  return
	  function(l)
	  {
	  if
	  (n)
	  throw
	  new
	  TypeError("Generator
	  is
	  already
	  executing.");
	  for
	  (;
	  i;
	  )
	  try
	  {
	  if
	  (n=1,
	  r
	  &&
	  (o=2
	  &
	  l[0]
	  ?
	  r.return
	  :
	  l[0]
	  ?
	  r.throw
	  ||
	  ((o=r.return)
	  &&
	  o.call(r),
	  0)
	  :
	  r.next)
	  &&
	  !(o=o.call(r,
	  l[1])).done)
	  return
	  o;
	  switch
	  (r=0,
	  o
	  &&
	  (l=[2
	  &
	  l[0],
	  o.value]),
	  l[0])
	  {
	  case
	  0:
	  case
	  1:
	  o=l;
	  break;
	  case
	  4:
	  return
	  i.label++,
	  {
	  value:
	  l[1],
	  done:
	  !1
	  };
	  case
	  5:
	  i.label++,
	  r=l[1],
	  l=[0];
	  continue;
	  case
	  7:
	  l=i.ops.pop(),
	  i.trys.pop();
	  continue;
	  default:
	  if
	  (o=i.trys,
	  !((o=o.length> 0 && o[o.length - 1]) || l[0] !== 6 && l[0] !== 2)) {
                                i = 0;
                                continue
                            }
                            if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3]))
		  {
		  i.label=l[1];
		  break
		  }
		  if
		  (l[0]===6
		  &&
		  i.label
		<
		  o[1])
		  {
		  i.label=o[1],
		  o=l;
		  break
		  }
		  if
		  (o
		  &&
		  i.label
		<
		  o[2])
		  {
		  i.label=o[2],
		  i.ops.push(l);
		  break
		  }
		  o[2]
		  &&
		  i.ops.pop(),
		  i.trys.pop();
		  continue
		  }
		  l=e.call(t,
		  i)
		  }
		  catch
		  (f)
		  {
		  l=[6,
		  f],
		  r=0
		  }
		  finally
		  {
		  n=o=
		  0}
		  if
		  (5
		  &
		  l[0])
		  throw
		  l[1];
		  return
		  {
		  value:
		  l[0]
		  ?
		  l[1]
		  :
		  void
		  0,
		  done:
		  !0
		  }
		  }([s,
		  c])
		  }
		  }
		  }
		  function
		  Ht(t,
		  e)
		  {
		  var
		  n=typeof
		  Symbol=="function"
		  &&
		  t[Symbol.iterator];
		  if
		  (!n)
		  return
		  t;
		  var
		  r,
		  o,
		  a=n.call(t),
		  i=[];
		  try
		  {
		  for
		  (;
		  (e===void
		  0
		  ||
		  e--> 0) && !(r = a.next()).done; )
            i.push(r.value)
    } catch (u) {
        o = {
            error: u
        }
    } finally {
        try {
            r && !r.done && (n = a.return) && n.call(a)
        } finally {
            if (o)
                throw o.error
        }
    }
    return i
}
function fn(t, e, n) {
    if (arguments.length === 2)
        for (var r, o = 0, a = e.length; o < a;
			  o++)
			  !r
			  &&
			  o
			  in
			  e
			  ||
			  (r
			  ||
			  (r=Array.prototype.slice.call(e,
			  0,
			  o)),
			  r[o]=e[o]);
			  return
			  t.concat(r
			  ||
			  Array.prototype.slice.call(e))
			  }
			  var
			  et=typeof
			  globalThis
			<"u"
			  ?
			  globalThis
			  :
			  typeof
			  window
			<"u"
			  ?
			  window
			  :
			  typeof
			  global
			<"u"
			  ?
			  global
			  :
			  typeof
			  self
			<"u"
			  ?
			  self
			  :
			  {};
			  function
			  jn(t)
			  {
			  return
			  t
			  &&
			  t.__esModule
			  &&
			  Object.prototype.hasOwnProperty.call(t,"default"
			  )
			  ?
			  t.default
			  :
			  t
			  }
			  function
			  Mt(t,
			  e)
			  {
			  return
			  t(e={
			  exports:
			  {}
			  },
			  e.exports),
			  e.exports
			  }
			  var
			  yt,
			  Oe,
			  ge=function(t)
			  {
			  return
			  t
			  &&
			  t.Math==Math
			  &&
			  t
			  },
			  b=ge(typeof
			  globalThis=="object"
			  &&
			  globalThis)
			  ||
			  ge(typeof
			  window=="object"
			  &&
			  window)
			  ||
			  ge(typeof
			  self=="object"
			  &&
			  self)
			  ||
			  ge(typeof
			  et=="object"
			  &&
			  et)
			  ||
			  function()
			  {
			  return
			  this
			  }()
			  ||
			  Function("return
			  this")(),
			  U=function(t)
			  {
			  try
			  {
			  return
			  !!t()
			  }
			  catch
			  {
			  return
			  !0
			  }
			  },
			  R=!U(function()
			  {
			  return
			  Object.defineProperty({},
			  1,
			  {
			  get:
			  function()
			  {
			  return
			  7
			  }
			  })[1]
			  !=7
			  }),
			  he=!U(function()
			  {
			  var
			  t=(function()
			  {}
			  ).bind();
			  return
			  typeof
			  t
			  !="function"
			  ||
			  t.hasOwnProperty("prototype")
			  }),
			  be=Function.prototype.call,
			  z=he
			  ?
			  be.bind(be)
			  :
			  function()
			  {
			  return
			  be.apply(be,
			  arguments)
			  }
			  ,
			  tr={}.propertyIsEnumerable,
			  er=Object.getOwnPropertyDescriptor,
			  li=er
			  &&
			  !tr.call({
			  1:
			  2
			  },
			  1)
			  ?
			  function(t)
			  {
			  var
			  e=er(this,
			  t);
			  return
			  !!e
			  &&
			  e.enumerable
			  }
			  :
			  tr,
			  An={
			  f:
			  li
			  },
			  jt=function(t,
			  e)
			  {
			  return
			  {
			  enumerable:
			  !(1
			  &
			  t),
			  configurable:
			  !(2
			  &
			  t),
			  writable:
			  !(4
			  &
			  t),
			  value:
			  e
			  }
			  },
			  co=Function.prototype,
			  fi=co.bind,
			  dn=co.call,
			  di=he
			  &&
			  fi.bind(dn,
			  dn),
			  I=he
			  ?
			  function(t)
			  {
			  return
			  t
			  &&
			  di(t)
			  }
			  :
			  function(t)
			  {
			  return
			  t
			  &&
			  function()
			  {
			  return
			  dn.apply(t,
			  arguments)
			  }
			  }
			  ,
			  hi=I({}.toString),
			  pi=I(""
			  .slice),
			  ut=function(t)
			  {
			  return
			  pi(hi(t),
			  8,
			  -1)
			  },
			  Je=b.Object,
			  yi=I(""
			  .split),
			  so=U(function()
			  {
			  return
			  !Je("z").propertyIsEnumerable(0)
			  })
			  ?
			  function(t)
			  {
			  return
			  ut(t)=="String"
			  ?
			  yi(t,""
			  )
			  :
			  Je(t)
			  }
			  :
			  Je,
			  vi=b.TypeError,
			  pe=function(t)
			  {
			  if
			  (t==null)
			  throw
			  vi("Can't
			  call
			  method
			  on" + t);
    return t
}, ot = function(t) {
    return so(pe(t))
}, A = function(t) {
    return typeof t == "
			  function"
			  },
			  P=function(t)
			  {
			  return
			  typeof
			  t=="object"
			  ?
			  t
			  !==null
			  :
			  A(t)
			  },
			  mi=function(t)
			  {
			  return
			  A(t)
			  ?
			  t
			  :
			  void
			  0
			  },
			  $=function(t,
			  e)
			  {
			  return
			  arguments.length
			<
			  2
			  ?
			  mi(b[t])
			  :
			  b[t]
			  &&
			  b[t][e]
			  },
			  At=I({}.isPrototypeOf),
			  De=$("navigator"
			  ,"userAgent"
			  )
			  ||""
			  ,
			  nr=b.process,
			  rr=b.Deno,
			  or=nr
			  &&
			  nr.versions
			  ||
			  rr
			  &&
			  rr.version,
			  ir=or
			  &&
			  or.v8;
			  ir
			  &&
			  (Oe=(yt=
			  ir.split("."))[0]> 0 && yt[0] < 4?
				  1
				  :
				  +(yt[0]
				  +
				  yt[1])),
				  !Oe
				  &&
				  De
				  &&
				  (!(yt=De.match(/Edge\/(\d+)/))
				  ||
				  yt[1]>= 74) && (yt = De.match(/Chrome\/(\d+)/)) && (Oe = +yt[1]);
var xe = Oe
  , M = !!Object.getOwnPropertySymbols && !U(function() {
    var t = Symbol();
    return !String(t) || !(Object(t)instanceof Symbol) || !Symbol.sham && xe && xe < 41
					  })
					  ,
					  Ln=M
					  &&
					  !Symbol.sham
					  &&
					  typeof
					  Symbol.iterator=="symbol"
					  ,
					  gi=b.Object
					  ,
					  Bt=Ln
					  ?
					  function(t)
					  {
					  return
					  typeof
					  t=="symbol"
					  }
					  :
					  function(t)
					  {
					  var
					  e=$("Symbol"
					  );
					  return
					  A(e)
					  &&
					  At(e.prototype,
					  gi(t))
					  }
					  ,
					  bi=b.String
					  ,
					  qt=function(t)
					  {
					  try
					  {
					  return
					  bi(t)
					  }
					  catch
					  {
					  return"Object"
					  }
					  }
					  ,
					  wi=b.TypeError
					  ,
					  Kn=function(t)
					  {
					  if
					  (A(t))
					  return
					  t;
					  throw
					  wi(qt(t)
					  +" is not a function"
					  )
					  }
					  ,
					  Ue=function(t,
					  e)
					  {
					  var
					  n=t[e];
					  return
					  n==null
					  ?
					  void
					  0
					  :
					  Kn(n)
					  }
					  ,
					  Si=b.TypeError
					  ,
					  ki=Object.defineProperty
					  ,
					  Pn=function(t,
					  e)
					  {
					  try
					  {
					  ki(b,
					  t,
					  {
					  value:
					  e,
					  configurable:
					  !0,
					  writable:
					  !0
					  })
					  }
					  catch
					  {
					  b[t]=e
					  }
					  return
					  e
					  }
					  ,
					  wt=b["__core-js_shared__"
					  ]
					  ||
					  Pn("__core-js_shared__",
					  {})
					  ,
					  _t=Mt(function(t)
					  {
					  (t.exports=function(e,
					  n)
					  {
					  return
					  wt[e]
					  ||
					  (wt[e]=n
					  !==void
					  0
					  ?
					  n
					  :
					  {})
					  }
					  )("versions",
					  []).push({
					  version:"3.22.4"
					  ,
					  mode:"global"
					  ,
					  copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)"
					  ,
					  license:"https://github.com/zloirock/core-js/blob/v3.22.4/LICENSE"
					  ,
					  source:"https://github.com/zloirock/core-js"
					  })
					  })
					  ,
					  _i=b.Object
					  ,
					  Qt=function(t)
					  {
					  return
					  _i(pe(t))
					  }
					  ,
					  Ii=I({}.hasOwnProperty)
					  ,
					  S=Object.hasOwn
					  ||
					  function(t,
					  e)
					  {
					  return
					  Ii(Qt(t),
					  e)
					  }
					  ,
					  Ti=0
					  ,
					  Oi=Math.random()
					  ,
					  Ci=I(1.toString)
					  ,
					  Lt=function(t)
					  {
					  return"Symbol("
					  +
					  (t===void
					  0
					  ?""
					  :
					  t)
					  +")_"
					  +
					  Ci(++Ti
					  +
					  Oi,
					  36)
					  }
					  ,
					  re=_t("wks"
					  )
					  ,
					  xt=b.Symbol
					  ,
					  ar=xt
					  &&
					  xt.for
					  ,
					  Ei=Ln
					  ?
					  xt
					  :
					  xt
					  &&
					  xt.withoutSetter
					  ||
					  Lt
					  ,
					  W=function(t)
					  {
					  if
					  (!S(re,
					  t)
					  ||
					  !M
					  &&
					  typeof
					  re[t]
					  !="string"
					  )
					  {
					  var
					  e="Symbol."
					  +
					  t;
					  M
					  &&
					  S(xt,
					  t)
					  ?
					  re[t]=xt[t]
					  :
					  re[t]=Ln
					  &&
					  ar
					  ?
					  ar(e)
					  :
					  Ei(e)
					  }
					  return
					  re[t]
					  }
					  ,
					  Ri=b.TypeError
					  ,
					  xi=W("toPrimitive"
					  )
					  ,
					  Ui=function(t,
					  e)
					  {
					  if
					  (!P(t)
					  ||
					  Bt(t))
					  return
					  t;
					  var
					  n,
					  r=Ue(t,
					  xi);
					  if
					  (r)
					  {
					  if
					  (n=z(r,
					  t,
					  e),
					  !P(n)
					  ||
					  Bt(n))
					  return
					  n;
					  throw
					  Ri("Can't
					  convert
					  object
					  to
					  primitive
					  value")
					  }
					  return
					  function(o,
					  a)
					  {
					  var
					  i,
					  u;
					  if
					  (A(i=o.toString)
					  &&
					  !P(u=z(i,
					  o))
					  ||
					  A(i=o.valueOf)
					  &&
					  !P(u=z(i,
					  o)))
					  return
					  u;
					  throw
					  Si("Can't
					  convert
					  object
					  to
					  primitive
					  value")
					  }(t)
					  }
					  ,
					  Kt=function(t)
					  {
					  var
					  e=Ui(t,
					  "string");
					  return
					  Bt(e)
					  ?
					  e
					  :
					  e
					  +""
					  }
					  ,
					  hn=b.document
					  ,
					  ji=P(hn)
					  &&
					  P(hn.createElement)
					  ,
					  uo=function(t)
					  {
					  return
					  ji
					  ?
					  hn.createElement(t)
					  :
					  {}
					  }
					  ,
					  lo=!R
					  &&
					  !U(function()
					  {
					  return
					  Object.defineProperty(uo("div"),"a"
					  ,
					  {
					  get:
					  function()
					  {
					  return
					  7
					  }
					  }).a
					  !=7
					  })
					  ,
					  cr=Object.getOwnPropertyDescriptor
					  ,
					  ye={
					  f:
					  R
					  ?
					  cr
					  :
					  function(t,
					  e)
					  {
					  if
					  (t=ot(t),
					  e=Kt(e),
					  lo)
					  try
					  {
					  return
					  cr(t,
					  e)
					  }
					  catch
					  {}
					  if
					  (S(t,
					  e))
					  return
					  jt(!z(An.f,
					  t,
					  e),
					  t[e])
					  }
					  }
					  ,
					  fo=R
					  &&
					  U(function()
					  {
					  return
					  Object.defineProperty(function()
					  {},"prototype"
					  ,
					  {
					  value:
					  42,
					  writable:
					  !1
					  }).prototype
					  !=42
					  })
					  ,
					  Ai=b.String
					  ,
					  Li=b.TypeError
					  ,
					  G=function(t)
					  {
					  if
					  (P(t))
					  return
					  t;
					  throw
					  Li(Ai(t)
					  +" is not an object"
					  )
					  }
					  ,
					  Ki=b.TypeError
					  ,
					  Ye=Object.defineProperty
					  ,
					  Pi=Object.getOwnPropertyDescriptor
					  ,
					  N={
					  f:
					  R
					  ?
					  fo
					  ?
					  function(t,
					  e,
					  n)
					  {
					  if
					  (G(t),
					  e=Kt(e),
					  G(n),
					  typeof
					  t=="function"
					  &&
					  e==="prototype"
					  &&"value"
					  in
					  n
					  &&"writable"
					  in
					  n
					  &&
					  !n.writable)
					  {
					  var
					  r=Pi(t,
					  e);
					  r
					  &&
					  r.writable
					  &&
					  (t[e]=n.value,
					  n={
					  configurable:"configurable"
					  in
					  n
					  ?
					  n.configurable
					  :
					  r.configurable,
					  enumerable:"enumerable"
					  in
					  n
					  ?
					  n.enumerable
					  :
					  r.enumerable,
					  writable:
					  !1
					  })
					  }
					  return
					  Ye(t,
					  e,
					  n)
					  }
					  :
					  Ye
					  :
					  function(t,
					  e,
					  n)
					  {
					  if
					  (G(t),
					  e=Kt(e),
					  G(n),
					  lo)
					  try
					  {
					  return
					  Ye(t,
					  e,
					  n)
					  }
					  catch
					  {}
					  if
					  ("get"in
					  n
					  ||"set"
					  in
					  n)
					  throw
					  Ki("Accessors
					  not
					  supported");
					  return"value"
					  in
					  n
					  &&
					  (t[e]=n.value),
					  t
					  }
					  }
					  ,
					  Ft=R
					  ?
					  function(t,
					  e,
					  n)
					  {
					  return
					  N.f(t,
					  e,
					  jt(1,
					  n))
					  }
					  :
					  function(t,
					  e,
					  n)
					  {
					  return
					  t[e]=n,
					  t
					  }
					  ,
					  ho=Function.prototype
					  ,
					  Wi=R
					  &&
					  Object.getOwnPropertyDescriptor
					  ,
					  He=S(ho,
					  "name")
					  ,
					  Wn={
					  EXISTS:
					  He,
					  PROPER:
					  He
					  &&
					  (function()
					  {}
					  ).name==="something"
					  ,
					  CONFIGURABLE:
					  He
					  &&
					  (!R
					  ||
					  R
					  &&
					  Wi(ho,"name"
					  ).configurable)
					  }
					  ,
					  Fi=I(Function.toString);
					  A(wt.inspectSource)
					  ||
					  (wt.inspectSource=function(t)
					  {
					  return
					  Fi(t)
					  }
					  );
					  var
					  je,
					  se,
					  Ae,
					  Fn=wt.inspectSource,
					  sr=b.WeakMap,
					  Gi=A(sr)
					  &&
					  native
					  code
					  .test(Fn(sr)),
					  ur=_t("keys"
					  ),
					  Ge=function(t)
					  {
					  return
					  ur[t]
					  ||
					  (ur[t]=Lt(t))
					  },
					  $t={},
					  pn=b.TypeError,
					  Zi=b.WeakMap;
					  if
					  (Gi
					  ||
					  wt.state)
					  {
					  var
					  Tt=wt.state
					  ||
					  (wt.state=new
					  Zi)
					  ,
					  Xi=I(Tt.get)
					  ,
					  lr=I(Tt.has)
					  ,
					  Ni=I(Tt.set);
					  je=function(t,
					  e)
					  {
					  if
					  (lr(Tt,
					  t))
					  throw
					  new
					  pn("Object
					  already
					  initialized");
					  return
					  e.facade=t,
					  Ni(Tt,
					  t,
					  e),
					  e
					  }
					  ,
					  se=function(t)
					  {
					  return
					  Xi(Tt,
					  t)
					  ||
					  {}
					  }
					  ,
					  Ae=function(t)
					  {
					  return
					  lr(Tt,
					  t)
					  }
					  }
					  else
					  {
					  var
					  Zt=Ge("state"
					  );
					  $t[Zt]=!0,
					  je=function(t,
					  e)
					  {
					  if
					  (S(t,
					  Zt))
					  throw
					  new
					  pn("Object
					  already
					  initialized");
					  return
					  e.facade=t,
					  Ft(t,
					  Zt,
					  e),
					  e
					  }
					  ,
					  se=function(t)
					  {
					  return
					  S(t,
					  Zt)
					  ?
					  t[Zt]
					  :
					  {}
					  }
					  ,
					  Ae=function(t)
					  {
					  return
					  S(t,
					  Zt)
					  }
					  }
					  var
					  nt={
					  set:
					  je,
					  get:
					  se,
					  has:
					  Ae,
					  enforce:
					  function(t)
					  {
					  return
					  Ae(t)
					  ?
					  se(t)
					  :
					  je(t,
					  {})
					  },
					  getterFor:
					  function(t)
					  {
					  return
					  function(e)
					  {
					  var
					  n;
					  if
					  (!P(e)
					  ||
					  (n=se(e)).type
					  !==t)
					  throw
					  pn("Incompatible
					  receiver," + t + "
					  required");
					  return
					  n
					  }
					  }
					  }
					  ,
					  Vi=Mt(function(t)
					  {
					  var
					  e=N.f
					  ,
					  n=Wn.CONFIGURABLE
					  ,
					  r=nt.enforce
					  ,
					  o=nt.get
					  ,
					  a=!U(function()
					  {
					  return
					  e(function()
					  {},"length"
					  ,
					  {
					  value:
					  8
					  }).length
					  !==8
					  })
					  ,
					  i=String(String).split("String"
					  )
					  ,
					  u=t.exports=
					  function(s,c,
					  l)
					  {
					  String(c).slice(0,
					  7)==="Symbol("
					  &&
					  (c="["
					  +
					  String(c).replace(
					  ^Symbol\(([^)]*)\)
					  ,"$1"
					  )
					  +"]"
					  ),
					  l
					  &&
					  l.getter
					  &&
					  (c="get "
					  +
					  c),
					  l
					  &&
					  l.setter
					  &&
					  (c="set "
					  +
					  c),
					  (!S(s,"name"
					  )
					  ||
					  n
					  &&
					  s.name
					  !==c)
					  &&
					  e(s,"name"
					  ,
					  {
					  value:
					  c,
					  configurable:
					  !0
					  }),
					  a
					  &&
					  l
					  &&
					  S(l,"arity"
					  )
					  &&
					  s.length
					  !==l.arity
					  &&
					  e(s,"length"
					  ,
					  {
					  value:
					  l.arity
					  });
					  var
					  f=r(s);
					  return
					  S(f,"source"
					  )
					  ||
					  (f.source=i.join(typeof
					  c=="string"
					  ?
					  c
					  :""
					  )),
					  s
					  }
					  ;
					  Function.prototype.toString=u(function()
					  {
					  return
					  A(this)
					  &&
					  o(this).source
					  ||
					  Fn(this)
					  },"toString"
					  )
					  })
					  ,
					  V=function(t,
					  e,
					  n,
					  r)
					  {
					  var
					  o=!!r
					  &&
					  !!r.unsafe
					  ,
					  a=!!r
					  &&
					  !!r.enumerable
					  ,
					  i=!!r
					  &&
					  !!r.noTargetGet
					  ,
					  u=r
					  &&
					  r.name
					  !==void
					  0
					  ?
					  r.name
					  :
					  e;
					  return
					  A(n)
					  &&
					  Vi(n,
					  u,
					  r),
					  t===b
					  ?
					  (a
					  ?
					  t[e]=n
					  :
					  Pn(e,
					  n),
					  t)
					  :
					  (o
					  ?
					  !i
					  &&
					  t[e]
					  &&
					  (a=!0)
					  :
					  delete
					  t[e],
					  a
					  ?
					  t[e]=n
					  :
					  Ft(t,
					  e,
					  n),
					  t)
					  }
					  ,
					  Ji=Math.ceil
					  ,
					  Di=Math.floor
					  ,
					  Gn=function(t)
					  {
					  var
					  e=+t;
					  return
					  e
					  !=e
					  ||
					  e===0
					  ?
					  0
					  :
					  (e> 0 ? Di : Ji)(e)
}
  , Yi = Math.max
  , Hi = Math.min
  , yn = function(t, e) {
    var n = Gn(t);
    return n < 0
						  ?
						  Yi(n
						  +
						  e,
						  0)
						  :
						  Hi(n,
						  e)
						  }
						  ,
						  Bi=Math.min
						  ,
						  po=function(t)
						  {
						  return
						  t> 0 ? Bi(Gn(t), 9007199254740991) : 0
}
  , te = function(t) {
    return po(t.length)
}
  , fr = function(t) {
    return function(e, n, r) {
        var o, a = ot(e), i = te(a), u = yn(r, i);
        if (t && n != n) {
            for (; i > u; )
                if ((o = a[u++]) != o)
                    return !0
        } else
            for (; i > u; u++)
                if ((t || u in a) && a[u] === n)
                    return t || u || 0;
        return !t && -1
    }
}
  , yo = {
    includes: fr(!0),
    indexOf: fr(!1)
}
  , zi = yo.indexOf
  , dr = I([].push)
  , vo = function(t, e) {
    var n, r = ot(t), o = 0, a = [];
    for (n in r)
        !S($t, n) && S(r, n) && dr(a, n);
    for (; e.length > o; )
        S(r, n = e[o++]) && (~zi(a, n) || dr(a, n));
    return a
}
  , Le = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
  , Mi = Le.concat("length", "prototype")
  , ue = {
    f: Object.getOwnPropertyNames || function(t) {
        return vo(t, Mi)
    }
}
  , Ze = {
    f: Object.getOwnPropertySymbols
}
  , qi = I([].concat)
  , Qi = $("Reflect", "ownKeys") || function(t) {
    var e = ue.f(G(t))
      , n = Ze.f;
    return n ? qi(e, n(t)) : e
}
  , mo = function(t, e, n) {
    for (var r = Qi(e), o = N.f, a = ye.f, i = 0; i < r.length;
							  i++)
							  {
							  var
							  u=r[i];
							  S(t,
							  u)
							  ||
							  n
							  ||
							  o(t,
							  u,
							  a(e,
							  u))
							  }
							  }
							  ,
							  $i=#|\.prototype\./
							  ,
							  ve=function(t,
							  e)
							  {
							  var
							  n=ea[ta(t)];
							  return
							  n==ra
							  ||
							  n
							  !=na
							  &&
							  (A(e)
							  ?
							  U(e)
							  :
							  !!e)
							  }
							  ,
							  ta=ve.normalize=
							  function(t){
							  return
							  String(t).replace($i,"."
							  ).toLowerCase()
							  }
							  ,
							  ea=ve.data=
							  {},
							  na=ve.NATIVE=
							  "N",
							  ra=ve.POLYFILL=
							  "P",
							  vn=ve
							  ,
							  oa=ye.f
							  ,
							  Z=function(t,
							  e)
							  {
							  var
							  n,
							  r,
							  o,
							  a,
							  i,
							  u=t.target,
							  s=t.global,
							  c=t.stat;
							  if
							  (n=s
							  ?
							  b
							  :
							  c
							  ?
							  b[u]
							  ||
							  Pn(u,
							  {})
							  :
							  (b[u]
							  ||
							  {}).prototype)
							  for
							  (r
							  in
							  e)
							  {
							  if
							  (a=e[r],
							  o=t.noTargetGet
							  ?
							  (i=oa(n,
							  r))
							  &&
							  i.value
							  :
							  n[r],
							  !vn(s
							  ?
							  r
							  :
							  u
							  +
							  (c
							  ?"."
							  :"#"
							  )
							  +
							  r,
							  t.forced)
							  &&
							  o
							  !==void
							  0)
							  {
							  if
							  (typeof
							  a==typeof
							  o)
							  continue;
							  mo(a,
							  o)
							  }
							  (t.sham
							  ||
							  o
							  &&
							  o.sham)
							  &&
							  Ft(a,"sham"
							  ,
							  !0),
							  V(n,
							  r,
							  a,
							  t)
							  }
							  }
							  ,
							  go={};
							  go[W("toStringTag")]="z"
							  ;
							  var
							  Be,
							  Zn=String(go)===
							  "[objectz]", ia = W("
							  toStringTag"),
							  aa=b.Object,
							  ca=ut(function()
							  {
							  return
							  arguments
							  }())=="Arguments"
							  ,
							  Gt=Zn
							  ?
							  ut
							  :
							  function(t)
							  {
							  var
							  e,
							  n,
							  r;
							  return
							  t===void
							  0
							  ?"Undefined"
							  :
							  t===null
							  ?"Null"
							  :
							  typeof
							  (n=function(o,
							  a)
							  {
							  try
							  {
							  return
							  o[a]
							  }
							  catch
							  {}
							  }(e=aa(t),
							  ia))=="string"
							  ?
							  n
							  :
							  ca
							  ?
							  ut(e)
							  :
							  (r=ut(e))==
							  "Object"&&
							  A(e.callee)
							  ?"Arguments"
							  :
							  r
							  }
							  ,
							  sa=b.String,
							  ft=function(t)
							  {
							  if
							  (Gt(t)==="Symbol"
							  )
							  throw
							  TypeError("Cannot
							  convert
							  a
							  Symbol
							  value
							  to
							  a
							  string");
							  return
							  sa(t)
							  },
							  ua=W("match"
							  ),
							  la=b.TypeError,
							  bo=function(t)
							  {
							  if
							  (function(e)
							  {
							  var
							  n;
							  return
							  P(e)
							  &&
							  ((n=e[ua])
							  !==void
							  0
							  ?
							  !!n
							  :
							  ut(e)=="RegExp"
							  )
							  }(t))
							  throw
							  la("The
							  method
							  doesn't
							  accept
							  regular
							  expressions");
							  return
							  t
							  },
							  fa=W("match"
							  ),
							  wo=function(t)
							  {
							  var
							  e=./;
							  try
							  {"/./"
							  [t](e)
							  }
							  catch
							  {
							  try
							  {
							  return
							  e[fa]=!1,
							  "
							  ."[t](e)
        } catch {}
    }
    return !1
}, da = ye.f, hr = I("
							  ".startsWith),
							  ha=I(""
							  .slice),
							  pa=Math.min,
							  So=wo("startsWith"
							  ),
							  ya=!(So
							  ||
							  (Be=da(String.prototype,
							  "startsWith"),
							  !Be
							  ||
							  Be.writable));
							  Z({
							  target:"String"
							  ,
							  proto:
							  !0,
							  forced:
							  !ya
							  &&
							  !So
							  },
							  {
							  startsWith:
							  function(t)
							  {
							  var
							  e=ft(pe(this));
							  bo(t);
							  var
							  n=po(pa(arguments.length> 1 ? arguments[1] : void 0, e.length))
          , r = ft(t);
        return hr ? hr(e, r, n) : ha(e, n, n + r.length) === r
    }
});
var Xn = function(t, e) {
    return I(b[t].prototype[e])
};
Xn("String", "startsWith");
var Ke = Array.isArray || function(t) {
    return ut(t) == "Array"
}
  , le = function(t, e, n) {
    var r = Kt(e);
    r in t ? N.f(t, r, jt(0, n)) : t[r] = n
}
  , ko = function() {}
  , va = []
  , _o = $("Reflect", "construct")
  , Nn = /^\s*(?:class|function)\b/
  , ma = I(Nn.exec)
  , ga = !Nn.exec(ko)
  , oe = function(t) {
    if (!A(t))
        return !1;
    try {
        return _o(ko, va, t),
        !0
    } catch {
        return !1
    }
}
  , Io = function(t) {
    if (!A(t))
        return !1;
    switch (Gt(t)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
        return !1
    }
    try {
        return ga || !!ma(Nn, Fn(t))
    } catch {
        return !0
    }
};
Io.sham = !0;
var pr, Vn = !_o || U(function() {
    var t;
    return oe(oe.call) || !oe(Object) || !oe(function() {
        t = !0
    }) || t
}) ? Io : oe, ba = W("species"), yr = b.Array, To = function(t, e) {
    return new (function(n) {
        var r;
        return Ke(n) && (r = n.constructor,
        (Vn(r) && (r === yr || Ke(r.prototype)) || P(r) && (r = r[ba]) === null) && (r = void 0)),
        r === void 0 ? yr : r
    }(t))(e === 0 ? 0 : e)
}, wa = W("species"), Oo = W("isConcatSpreadable"), vr = b.TypeError, Sa = xe >= 51 || !U(function() {
    var t = [];
    return t[Oo] = !1,
    t.concat()[0] !== t
}), ka = (pr = "concat",
xe >= 51 || !U(function() {
    var t = [];
    return (t.constructor = {})[wa] = function() {
        return {
            foo: 1
        }
    }
    ,
    t[pr](Boolean).foo !== 1
})), _a = function(t) {
    if (!P(t))
        return !1;
    var e = t[Oo];
    return e !== void 0 ? !!e : Ke(t)
};
Z({
    target: "Array",
    proto: !0,
    arity: 1,
    forced: !Sa || !ka
}, {
    concat: function(t) {
        var e, n, r, o, a, i = Qt(this), u = To(i, 0), s = 0;
        for (e = -1,
        r = arguments.length; e < r;
								  e++)
								  if
								  (_a(a=e===
								  -1?
								  i
								  :
								  arguments[e]))
								  {
								  if
								  (s
								  +
								  (o=te(a))> 9007199254740991)
                    throw vr("Maximum allowed index exceeded");
                for (n = 0; n < o;
									  n++,
									  s++)
									  n
									  in
									  a
									  &&
									  le(u,
									  s,
									  a[n])
									  }
									  else
									  {
									  if
									  (s>= 9007199254740991)
                    throw vr("Maximum allowed index exceeded");
                le(u, s++, a)
            }
        return u.length = s,
        u
    }
});
var Ia = Zn ? {}.toString : function() {
    return "[object " + Gt(this) + "]"
}
;
Zn || V(Object.prototype, "toString", Ia, {
    unsafe: !0
});
var we, Jn = Object.keys || function(t) {
    return vo(t, Le)
}
, Ta = R && !fo ? Object.defineProperties : function(t, e) {
    G(t);
    for (var n, r = ot(e), o = Jn(e), a = o.length, i = 0; a > i; )
        N.f(t, n = o[i++], r[n]);
    return t
}
, Co = {
    f: Ta
}, Oa = $("document", "documentElement"), Eo = Ge("IE_PROTO"), ze = function() {}, Ro = function(t) {
    return "<script>" + t + "<\ script>"
											   },
											   mr=function(t)
											   {
											   t.write(Ro("")),
											   t.close();
											   var
											   e=t.parentWindow.Object;
											   return
											   t=null,
											   e
											   },
											   Ce=function()
											   {
											   try
											   {
											   we=new
											   ActiveXObject("htmlfile")
											   }
											   catch
											   {}
											   var
											   t,
											   e;
											   Ce=typeof
											   document
											<"u"
											  ?
											  document.domain
											  &&
											  we
											  ?
											  mr(we)
											  :
											  ((e=uo("iframe"
											  )).style.display="none"
											  ,
											  Oa.appendChild(e),
											  e.src="javascript:"
											  ,
											  (t=e.contentWindow.document).open(),
											  t.write(Ro("document.F=Object")),
    t.close(),
    t.F) : mr(we);
    for (var n = Le.length; n--; )
        delete Ce.prototype[Le[n]];
    return Ce()
};
$t[Eo] = !0;
var kt = Object.create || function(t, e) {
    var n;
    return t !== null ? (ze.prototype = G(t),
    n = new ze,
    ze.prototype = null,
    n[Eo] = t) : n = Ce(),
    e === void 0 ? n : Co.f(n, e)
}
  , Ca = b.Array
  , Ea = Math.max
  , xo = ue.f
  , Uo = typeof window == "
											  object"
											  &&
											  window
											  &&
											  Object.getOwnPropertyNames
											  ?
											  Object.getOwnPropertyNames(window)
											  :
											  []
											  ,
											  Ra=function(t)
											  {
											  try
											  {
											  return
											  xo(t)
											  }
											  catch
											  {
											  return
											  function(n,
											  r,
											  o)
											  {
											  for
											  (var
											  a=te(n),
											  i=yn(r,
											  a),
											  u=yn(a,
											  a),
											  s=Ca(Ea(u
											  -
											  i,
											  0)),
											  c=0;
											  i
											<
											  u;
											  i++,
											  c++)
											  le(s,
											  c,
											  n[i]);
											  return
											  s.length=c,
											  s
											  }(Uo)
											  }
											  }
											  ,
											  Dn={
											  f:
											  function(t)
											  {
											  return
											  Uo
											  &&
											  ut(t)=="Window"
											  ?
											  Ra(t)
											  :
											  xo(ot(t))
											  }
											  }
											  ,
											  jo={
											  f:
											  W
											  }
											  ,
											  fe=b
											  ,
											  xa=N.f
											  ,
											  Y=function(t)
											  {
											  var
											  e=fe.Symbol
											  ||
											  (fe.Symbol={});
											  S(e,
											  t)
											  ||
											  xa(e,
											  t,
											  {
											  value:
											  jo.f(t)
											  })
											  }
											  ,
											  Ao=function()
											  {
											  var
											  t=$("Symbol"
											  )
											  ,
											  e=t
											  &&
											  t.prototype
											  ,
											  n=e
											  &&
											  e.valueOf
											  ,
											  r=W("toPrimitive"
											  );
											  e
											  &&
											  !e[r]
											  &&
											  V(e,
											  r,
											  function(o)
											  {
											  return
											  z(n,
											  this)
											  },
											  {
											  arity:
											  1
											  })
											  }
											  ,
											  Ua=N.f
											  ,
											  gr=W("toStringTag"
											  )
											  ,
											  bt=function(t,
											  e,
											  n)
											  {
											  t
											  &&
											  !n
											  &&
											  (t=t.prototype),
											  t
											  &&
											  !S(t,
											  gr)
											  &&
											  Ua(t,
											  gr,
											  {
											  configurable:
											  !0,
											  value:
											  e
											  })
											  }
											  ,
											  ja=I(I.bind)
											  ,
											  Xe=function(t,
											  e)
											  {
											  return
											  Kn(t),
											  e===void
											  0
											  ?
											  t
											  :
											  he
											  ?
											  ja(t,
											  e)
											  :
											  function()
											  {
											  return
											  t.apply(e,
											  arguments)
											  }
											  }
											  ,
											  br=I([].push)
											  ,
											  vt=function(t)
											  {
											  var
											  e=t==
											  1,
											  n=t==
											  2,
											  r=t==
											  3,
											  o=t==
											  4,
											  a=t==
											  6,
											  i=t==
											  7,
											  u=t==
											  5||
											  a;
											  return
											  function(s,
											  c,
											  l,
											  f)
											  {
											  for
											  (var
											  d,
											  h,
											  v=Qt(s),
											  g=so(v),
											  y=Xe(c,
											  l),
											  p=te(g),
											  m=0,
											  w=f
											  ||
											  To,
											  x=e
											  ?
											  w(s,
											  p)
											  :
											  n
											  ||
											  i
											  ?
											  w(s,
											  0)
											  :
											  void
											  0;
											  p> m; m++)
            if ((u || m in g) && (h = y(d = g[m], m, v),
            t))
                if (e)
                    x[m] = h;
                else if (h)
                    switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return d;
                    case 6:
                        return m;
                    case 2:
                        br(x, d)
                    }
                else
                    switch (t) {
                    case 4:
                        return !1;
                    case 7:
                        br(x, d)
                    }
        return a ? -1 : r || o ? o : x
    }
}
  , Ne = {
    forEach: vt(0),
    map: vt(1),
    filter: vt(2),
    some: vt(3),
    every: vt(4),
    find: vt(5),
    findIndex: vt(6),
    filterReject: vt(7)
}.forEach
  , H = Ge("hidden")
  , Aa = nt.set
  , wr = nt.getterFor("Symbol")
  , q = Object.prototype
  , Jt = b.Symbol
  , ce = Jt && Jt.prototype
  , La = b.TypeError
  , Me = b.QObject
  , Lo = ye.f
  , gt = N.f
  , Ko = Dn.f
  , Ka = An.f
  , Po = I([].push)
  , dt = _t("symbols")
  , me = _t("op-symbols")
  , Pa = _t("wks")
  , qe = !Me || !Me.prototype || !Me.prototype.findChild
  , mn = R && U(function() {
    return kt(gt({}, "a", {
        get: function() {
            return gt(this, "a", {
                value: 7
            }).a
        }
    })).a != 7
}) ? function(t, e, n) {
    var r = Lo(q, e);
    r && delete q[e],
    gt(t, e, n),
    r && t !== q && gt(q, e, r)
}
: gt
  , Qe = function(t, e) {
    var n = dt[t] = kt(ce);
    return Aa(n, {
        type: "Symbol",
        tag: t,
        description: e
    }),
    R || (n.description = e),
    n
}
  , Pe = function(t, e, n) {
    t === q && Pe(me, e, n),
    G(t);
    var r = Kt(e);
    return G(n),
    S(dt, r) ? (n.enumerable ? (S(t, H) && t[H][r] && (t[H][r] = !1),
    n = kt(n, {
        enumerable: jt(0, !1)
    })) : (S(t, H) || gt(t, H, jt(1, {})),
    t[H][r] = !0),
    mn(t, r, n)) : gt(t, r, n)
}
  , $e = function(t, e) {
    G(t);
    var n = ot(e)
      , r = Jn(n).concat(Wo(n));
    return Ne(r, function(o) {
        R && !z(gn, n, o) || Pe(t, o, n[o])
    }),
    t
}
  , gn = function(t) {
    var e = Kt(t)
      , n = z(Ka, this, e);
    return !(this === q && S(dt, e) && !S(me, e)) && (!(n || !S(this, e) || !S(dt, e) || S(this, H) && this[H][e]) || n)
}
  , Sr = function(t, e) {
    var n = ot(t)
      , r = Kt(e);
    if (n !== q || !S(dt, r) || S(me, r)) {
        var o = Lo(n, r);
        return !o || !S(dt, r) || S(n, H) && n[H][r] || (o.enumerable = !0),
        o
    }
}
  , kr = function(t) {
    var e = Ko(ot(t))
      , n = [];
    return Ne(e, function(r) {
        S(dt, r) || S($t, r) || Po(n, r)
    }),
    n
}
  , Wo = function(t) {
    var e = t === q
      , n = Ko(e ? me : ot(t))
      , r = [];
    return Ne(n, function(o) {
        !S(dt, o) || e && !S(q, o) || Po(r, dt[o])
    }),
    r
};
M || (ce = (Jt = function() {
    if (At(ce, this))
        throw La("Symbol is not a constructor");
    var t = arguments.length && arguments[0] !== void 0 ? ft(arguments[0]) : void 0
      , e = Lt(t)
      , n = function(r) {
        this === q && z(n, me, r),
        S(this, H) && S(this[H], e) && (this[H][e] = !1),
        mn(this, e, jt(1, r))
    };
    return R && qe && mn(q, e, {
        configurable: !0,
        set: n
    }),
    Qe(e, t)
}
).prototype,
V(ce, "toString", function() {
    return wr(this).tag
}),
V(Jt, "withoutSetter", function(t) {
    return Qe(Lt(t), t)
}),
An.f = gn,
N.f = Pe,
Co.f = $e,
ye.f = Sr,
ue.f = Dn.f = kr,
Ze.f = Wo,
jo.f = function(t) {
    return Qe(W(t), t)
}
,
R && (gt(ce, "description", {
    configurable: !0,
    get: function() {
        return wr(this).description
    }
}),
V(q, "propertyIsEnumerable", gn, {
    unsafe: !0
}))),
Z({
    global: !0,
    wrap: !0,
    forced: !M,
    sham: !M
}, {
    Symbol: Jt
}),
Ne(Jn(Pa), function(t) {
    Y(t)
}),
Z({
    target: "Symbol",
    stat: !0,
    forced: !M
}, {
    useSetter: function() {
        qe = !0
    },
    useSimple: function() {
        qe = !1
    }
}),
Z({
    target: "Object",
    stat: !0,
    forced: !M,
    sham: !R
}, {
    create: function(t, e) {
        return e === void 0 ? kt(t) : $e(kt(t), e)
    },
    defineProperty: Pe,
    defineProperties: $e,
    getOwnPropertyDescriptor: Sr
}),
Z({
    target: "Object",
    stat: !0,
    forced: !M
}, {
    getOwnPropertyNames: kr
}),
Ao(),
bt(Jt, "Symbol"),
$t[H] = !0;
var Fo = M && !!Symbol.for && !!Symbol.keyFor
  , tn = _t("string-to-symbol-registry")
  , Wa = _t("symbol-to-string-registry");
Z({
    target: "Symbol",
    stat: !0,
    forced: !Fo
}, {
    for: function(t) {
        var e = ft(t);
        if (S(tn, e))
            return tn[e];
        var n = $("Symbol")(e);
        return tn[e] = n,
        Wa[n] = e,
        n
    }
});
var _r = _t("symbol-to-string-registry");
Z({
    target: "Symbol",
    stat: !0,
    forced: !Fo
}, {
    keyFor: function(t) {
        if (!Bt(t))
            throw TypeError(qt(t) + " is not a symbol");
        if (S(_r, t))
            return _r[t]
    }
});
var Go = Function.prototype
  , Ir = Go.apply
  , Tr = Go.call
  , Zo = typeof Reflect == "object" && Reflect.apply || (he ? Tr.bind(Ir) : function() {
    return Tr.apply(Ir, arguments)
}
)
  , Yn = I([].slice)
  , St = $("JSON", "stringify")
  , Se = I(/./.exec)
  , Or = I("".charAt)
  , Fa = I("".charCodeAt)
  , Ga = I("".replace)
  , Za = I(1.toString)
  , Xa = /[\uD800-\uDFFF]/g
  , Cr = /^[\uD800-\uDBFF]$/
  , Er = /^[\uDC00-\uDFFF]$/
  , Rr = !M || U(function() {
    var t = $("Symbol")();
    return St([t]) != "[null]" || St({
        a: t
    }) != "{}" || St(Object(t)) != "{}"
})
  , xr = U(function() {
    return St("\uDF06\uD834") !== '"\\udf06\\ud834"' || St("\uDEAD") !== '"\\udead"'
})
  , Na = function(t, e) {
    var n = Yn(arguments)
      , r = e;
    if ((P(e) || t !== void 0) && !Bt(t))
        return Ke(e) || (e = function(o, a) {
            if (A(r) && (a = z(r, this, o, a)),
            !Bt(a))
                return a
        }
        ),
        n[1] = e,
        Zo(St, null, n)
}
  , Va = function(t, e, n) {
    var r = Or(n, e - 1)
      , o = Or(n, e + 1);
    return Se(Cr, t) && !Se(Er, o) || Se(Er, t) && !Se(Cr, r) ? "\\u" + Za(Fa(t, 0), 16) : t
};
St && Z({
    target: "JSON",
    stat: !0,
    arity: 3,
    forced: Rr || xr
}, {
    stringify: function(t, e, n) {
        var r = Yn(arguments)
          , o = Zo(Rr ? Na : St, null, r);
        return xr && typeof o == "string" ? Ga(o, Xa, Va) : o
    }
});
var Ja = !M || U(function() {
    Ze.f(1)
});
Z({
    target: "Object",
    stat: !0,
    forced: Ja
}, {
    getOwnPropertySymbols: function(t) {
        var e = Ze.f;
        return e ? e(Qt(t)) : []
    }
}),
Y("asyncIterator");
var Da = N.f
  , ct = b.Symbol
  , Ot = ct && ct.prototype;
if (R && A(ct) && (!("description"in Ot) || ct().description !== void 0)) {
    var Ur = {}
      , ke = function() {
        var t = arguments.length < 1
												  ||
												  arguments[0]===void
												  0
												  ?
												  void
												  0
												  :
												  ft(arguments[0])
												  ,
												  e=At(Ot,
												  this)
												  ?
												  new
												  ct(t)
												  :
												  t===void
												  0
												  ?
												  ct()
												  :
												  ct(t);
												  return
												  t===""
												  &&
												  (Ur[e]=!0),
												  e
												  };
												  mo(ke,
												  ct),
												  ke.prototype=Ot,
												  Ot.constructor=ke;
												  var
												  Ya=String(ct("test"
												  ))=="Symbol(test)"
												  ,
												  Ha=I(Ot.toString)
												  ,
												  Ba=I(Ot.valueOf)
												  ,
												  za=^Symbol\((.*)\)[^)]+$/
												  ,
												  Ma=I(""
												  .replace)
												  ,
												  qa=I(""
												  .slice);
												  Da(Ot,"description"
												  ,
												  {
												  configurable:
												  !0,
												  get:
												  function()
												  {
												  var
												  t=Ba(this)
												  ,
												  e=Ha(t);
												  if
												  (S(Ur,
												  t))
												  return""
												  ;
												  var
												  n=Ya
												  ?
												  qa(e,
												  7,
												  -1)
												  :
												  Ma(e,
												  za,"$1"
												  );
												  return
												  n===""
												  ?
												  void
												  0
												  :
												  n
												  }
												  }),
												  Z({
												  global:
												  !0,
												  forced:
												  !0
												  },
												  {
												  Symbol:
												  ke
												  })
												  }
												  Y("hasInstance"),
												  Y("isConcatSpreadable"),
												  Y("iterator"),
												  Y("match"),
												  Y("matchAll"),
												  Y("replace"),
												  Y("search"),
												  Y("species"),
												  Y("split"),
												  Y("toPrimitive"),
												  Ao(),
												  Y("toStringTag"),
												  bt($("Symbol"),"Symbol"
												  ),
												  Y("unscopables"),
												  bt(b.JSON,"JSON"
												  ,
												  !0),
												  bt(Math,"Math"
												  ,
												  !0),
												  Z({
												  global:
												  !0
												  },
												  {
												  Reflect:
												  {}
												  }),
												  bt(b.Reflect,"Reflect"
												  ,
												  !0),
												  fe.Symbol;
												  var
												  Ut,
												  jr,
												  Ar,
												  Qa=I(""
												  .charAt),
												  Lr=I(""
												  .charCodeAt),
												  $a=I(""
												  .slice),
												  Kr=function(t)
												  {
												  return
												  function(e,
												  n)
												  {
												  var
												  r,
												  o,
												  a=ft(pe(e)),
												  i=Gn(n),
												  u=a.length;
												  return
												  i
												<
												  0
												  ||
												  i>= u ? t ? "" : void 0 : (r = Lr(a, i)) < 55296
													  ||
													  r> 56319 || i + 1 === u || (o = Lr(a, i + 1)) < 56320
														  ||
														  o> 57343 ? t ? Qa(a, i) : r : t ? $a(a, i, i + 2) : o - 56320 + (r - 55296 << 10)
															   +
															   65536
															   }
															   },
															   tc={
															   codeAt:
															   Kr(!1),
															   charAt:
															   Kr(!0)
															   },
															   ec=!U(function()
															   {
															   function
															   t()
															   {}
															   return
															   t.prototype.constructor=null,
															   Object.getPrototypeOf(new
															   t)
															   !==t.prototype
															   }),
															   Pr=Ge("IE_PROTO"
															   ),
															   bn=b.Object,
															   nc=bn.prototype,
															   Pt=ec
															   ?
															   bn.getPrototypeOf
															   :
															   function(t)
															   {
															   var
															   e=Qt(t);
															   if
															   (S(e,
															   Pr))
															   return
															   e[Pr];
															   var
															   n=e.constructor;
															   return
															   A(n)
															   &&
															   e
															   instanceof
															   n
															   ?
															   n.prototype
															   :
															   e
															   instanceof
															   bn
															   ?
															   nc
															   :
															   null
															   }
															   ,
															   wn=W("iterator"
															   ),
															   Xo=!1;
															   [].keys
															   &&
															   ("next"in
															   (Ar=[].keys())
															   ?
															   (jr=Pt(Pt(Ar)))
															   !==Object.prototype
															   &&
															   (Ut=jr)
															   :
															   Xo=!0);
															   var
															   rc=Ut==
															   null||
															   U(function()
															   {
															   var
															   t={};
															   return
															   Ut[wn].call(t)
															   !==t
															   });
															   rc
															   &&
															   (Ut={}),
															   A(Ut[wn])
															   ||
															   V(Ut,
															   wn,
															   function()
															   {
															   return
															   this
															   });
															   var
															   Hn={
															   IteratorPrototype:
															   Ut,
															   BUGGY_SAFARI_ITERATORS:
															   Xo
															   }
															   ,
															   zt={}
															   ,
															   oc=Hn.IteratorPrototype
															   ,
															   ic=function()
															   {
															   return
															   this
															   }
															   ,
															   ac=b.String
															   ,
															   cc=b.TypeError
															   ,
															   rt=Object.setPrototypeOf
															   ||
															   ("__proto__"in
															   {}
															   ?
															   function()
															   {
															   var
															   t,
															   e=!1,
															   n={};
															   try
															   {
															   (t=I(Object.getOwnPropertyDescriptor(Object.prototype,
															   "__proto__").set))(n,
															   []),
															   e=n
															   instanceof
															   Array
															   }
															   catch
															   {}
															   return
															   function(r,
															   o)
															   {
															   return
															   G(r),
															   function(a)
															   {
															   if
															   (typeof
															   a=="object"
															   ||
															   A(a))
															   return
															   a;
															   throw
															   cc("Can't
															   set" + ac(a) + "
															   as
															   a
															   prototype")
															   }(o),
															   e
															   ?
															   t(r,
															   o)
															   :
															   r.__proto__=o,
															   r
															   }
															   }()
															   :
															   void
															   0)
															   ,
															   sc=Wn.PROPER
															   ,
															   uc=Wn.CONFIGURABLE
															   ,
															   Wr=Hn.IteratorPrototype
															   ,
															   _e=Hn.BUGGY_SAFARI_ITERATORS
															   ,
															   ie=W("iterator"
															   )
															   ,
															   lc=function()
															   {
															   return
															   this
															   }
															   ,
															   Bn=function(t,
															   e,
															   n,
															   r,
															   o,
															   a,
															   i)
															   {
															   (function(p,
															   m,
															   w,
															   x)
															   {
															   var
															   k=m
															   +" Iterator"
															   ;
															   p.prototype=kt(oc,
															   {
															   next:
															   jt(+!x,
															   w)
															   }),
															   bt(p,
															   k,
															   !1),
															   zt[k]=ic
															   }
															   )(n,
															   e,
															   r);
															   var
															   u,
															   s,
															   c,
															   l=function(p)
															   {
															   if
															   (p===o
															   &&
															   g)
															   return
															   g;
															   if
															   (!_e
															   &&
															   p
															   in
															   h)
															   return
															   h[p];
															   switch
															   (p)
															   {
															   case"keys"
															   :
															   case"values"
															   :
															   case"entries"
															   :
															   return
															   function()
															   {
															   return
															   new
															   n(this,p)
															   }
															   }
															   return
															   function()
															   {
															   return
															   new
															   n(this)
															   }
															   },
															   f=e
															   +" Iterator"
															   ,
															   d=!1,
															   h=t.prototype,
															   v=h[ie]
															   ||
															   h["@@iterator"]
															   ||
															   o
															   &&
															   h[o],
															   g=!_e
															   &&
															   v
															   ||
															   l(o),
															   y=e==
															   "Array"&&
															   h.entries
															   ||
															   v;
															   if
															   (y
															   &&
															   (u=Pt(y.call(new
															   t)))
															   !==Object.prototype
															   &&
															   u.next
															   &&
															   (Pt(u)
															   !==Wr
															   &&
															   (rt
															   ?
															   rt(u,
															   Wr)
															   :
															   A(u[ie])
															   ||
															   V(u,
															   ie,
															   lc)),
															   bt(u,
															   f,
															   !0)),
															   sc
															   &&
															   o=="values"
															   &&
															   v
															   &&
															   v.name
															   !=="values"
															   &&
															   (uc
															   ?
															   Ft(h,"name"
															   ,"values"
															   )
															   :
															   (d=!0,
															   g=function()
															   {
															   return
															   z(v,
															   this)
															   }
															   )),
															   o)
															   if
															   (s={
															   values:
															   l("values"),
															   keys:
															   a
															   ?
															   g
															   :
															   l("keys"),
															   entries:
															   l("entries")
															   },
															   i)
															   for
															   (c
															   in
															   s)
															   (_e
															   ||
															   d
															   ||
															   !(c
															   in
															   h))
															   &&
															   V(h,
															   c,
															   s[c]);
															   else
															   Z({
															   target:
															   e,
															   proto:
															   !0,
															   forced:
															   _e
															   ||
															   d
															   },
															   s);
															   return
															   h[ie]
															   !==g
															   &&
															   V(h,
															   ie,
															   g,
															   {
															   name:
															   o
															   }),
															   zt[e]=g,
															   s
															   }
															   ,
															   fc=tc.charAt
															   ,
															   dc=nt.set
															   ,
															   hc=nt.getterFor("String Iterator"
															   );
															   Bn(String,"String"
															   ,
															   function(t)
															   {
															   dc(this,
															   {
															   type:"String Iterator"
															   ,
															   string:
															   ft(t),
															   index:
															   0
															   })
															   },
															   function()
															   {
															   var
															   t,
															   e=hc(this),
															   n=e.string,
															   r=e.index;
															   return
															   r>= n.length ? {
        value: void 0,
        done: !0
    } : (t = fc(n, r),
    e.index += t.length,
    {
        value: t,
        done: !1
    })
});
var Sn = function(t, e, n) {
    var r, o;
    G(t);
    try {
        if (!(r = Ue(t, "return"))) {
            if (e === "throw")
                throw n;
            return n
        }
        r = z(r, t)
    } catch (a) {
        o = !0,
        r = a
    }
    if (e === "throw")
        throw n;
    if (o)
        throw r;
    return G(r),
    n
}
  , pc = function(t, e, n, r) {
    try {
        return r ? e(G(n)[0], n[1]) : e(n)
    } catch (o) {
        Sn(t, "throw", o)
    }
}
  , yc = W("iterator")
  , vc = Array.prototype
  , No = function(t) {
    return t !== void 0 && (zt.Array === t || vc[yc] === t)
}
  , mc = W("iterator")
  , zn = function(t) {
    if (t != null)
        return Ue(t, mc) || Ue(t, "@@iterator") || zt[Gt(t)]
}
  , gc = b.TypeError
  , Vo = function(t, e) {
    var n = arguments.length < 2
																  ?
																  zn(t)
																  :
																  e;
																  if
																  (Kn(n))
																  return
																  G(z(n,
																  t));
																  throw
																  gc(qt(t)
																  +" is not iterable"
																  )
																  }
																  ,
																  Fr=b.Array
																  ,
																  Jo=W("iterator"
																  )
																  ,
																  Do=!1;
																  try
																  {
																  var
																  bc=0
																  ,
																  Gr={
																  next:
																  function()
																  {
																  return
																  {
																  done:
																  !!bc++
																  }
																  },
																  return:
																  function()
																  {
																  Do=!0
																  }
																  };
																  Gr[Jo]=function()
																  {
																  return
																  this
																  }
																  ,
																  Array.from(Gr,
																  function()
																  {
																  throw
																  2
																  })
																  }
																  catch
																  {}
																  var
																  Yo=function(t,
																  e)
																  {
																  if
																  (!Do)
																  return
																  !1;
																  var
																  n=!1;
																  try
																  {
																  var
																  r={};
																  r[Jo]=function()
																  {
																  return
																  {
																  next:
																  function()
																  {
																  return
																  {
																  done:
																  n=!0
																  }
																  }
																  }
																  }
																  ,
																  t(r)
																  }
																  catch
																  {}
																  return
																  n
																  }
																  ,
																  wc=!Yo(function(t)
																  {
																  Array.from(t)
																  });
																  Z({
																  target:"Array"
																  ,
																  stat:
																  !0,
																  forced:
																  wc
																  },
																  {
																  from:
																  function(t)
																  {
																  var
																  e=Qt(t)
																  ,
																  n=Vn(this)
																  ,
																  r=arguments.length
																  ,
																  o=r> 1 ? arguments[1] : void 0
          , a = o !== void 0;
        a && (o = Xe(o, r > 2 ? arguments[2] : void 0));
        var i, u, s, c, l, f, d = zn(e), h = 0;
        if (!d || this == Fr && No(d))
            for (i = te(e),
            u = n ? new this(i) : Fr(i); i > h; h++)
                f = a ? o(e[h], h) : e[h],
                le(u, h, f);
        else
            for (l = (c = Vo(e, d)).next,
            u = n ? new this : []; !(s = z(l, c)).done; h++)
                f = a ? pc(c, o, [s.value, h], !0) : s.value,
                le(u, h, f);
        return u.length = h,
        u
    }
}),
fe.Array.from;
var B, Yt, We, Sc = typeof ArrayBuffer < "u"
																	  &&
																	  typeof
																	  DataView
																	<"u"
																	  ,
																	  kc=N.f,
																	  Fe=b.Int8Array,
																	  kn=Fe
																	  &&
																	  Fe.prototype,
																	  Zr=b.Uint8ClampedArray,
																	  Xr=Zr
																	  &&
																	  Zr.prototype,
																	  tt=Fe
																	  &&
																	  Pt(Fe),
																	  Q=kn
																	  &&
																	  Pt(kn),
																	  _c=Object.prototype,
																	  _n=b.TypeError,
																	  Nr=W("toStringTag"
																	  ),
																	  In=Lt("TYPED_ARRAY_TAG"
																	  ),
																	  Mn=Lt("TYPED_ARRAY_CONSTRUCTOR"
																	  ),
																	  lt=Sc
																	  &&
																	  !!rt
																	  &&
																	  Gt(b.opera)
																	  !=="Opera"
																	  ,
																	  Ho=!1,
																	  st={
																	  Int8Array:
																	  1,
																	  Uint8Array:
																	  1,
																	  Uint8ClampedArray:
																	  1,
																	  Int16Array:
																	  2,
																	  Uint16Array:
																	  2,
																	  Int32Array:
																	  4,
																	  Uint32Array:
																	  4,
																	  Float32Array:
																	  4,
																	  Float64Array:
																	  8
																	  },
																	  qn={
																	  BigInt64Array:
																	  8,
																	  BigUint64Array:
																	  8
																	  },
																	  Vr=function(t)
																	  {
																	  if
																	  (!P(t))
																	  return
																	  !1;
																	  var
																	  e=Gt(t);
																	  return
																	  S(st,
																	  e)
																	  ||
																	  S(qn,
																	  e)
																	  };
																	  for
																	  (B
																	  in
																	  st)
																	  (We=(Yt=
																	  b[B])&&
																	  Yt.prototype)
																	  ?
																	  Ft(We,
																	  Mn,
																	  Yt)
																	  :
																	  lt=!1;
																	  for
																	  (B
																	  in
																	  qn)
																	  (We=(Yt=
																	  b[B])&&
																	  Yt.prototype)
																	  &&
																	  Ft(We,
																	  Mn,
																	  Yt);
																	  if
																	  ((!lt
																	  ||
																	  !A(tt)
																	  ||
																	  tt===Function.prototype)
																	  &&
																	  (tt=function()
																	  {
																	  throw
																	  _n("Incorrect
																	  invocation")
																	  }
																	  ,
																	  lt))
																	  for
																	  (B
																	  in
																	  st)
																	  b[B]
																	  &&
																	  rt(b[B],
																	  tt);
																	  if
																	  ((!lt
																	  ||
																	  !Q
																	  ||
																	  Q===_c)
																	  &&
																	  (Q=tt.prototype,
																	  lt))
																	  for
																	  (B
																	  in
																	  st)
																	  b[B]
																	  &&
																	  rt(b[B].prototype,
																	  Q);
																	  if
																	  (lt
																	  &&
																	  Pt(Xr)
																	  !==Q
																	  &&
																	  rt(Xr,
																	  Q),
																	  R
																	  &&
																	  !S(Q,
																	  Nr))
																	  for
																	  (B
																	  in
																	  Ho=!0,
																	  kc(Q,
																	  Nr,
																	  {
																	  get:
																	  function()
																	  {
																	  return
																	  P(this)
																	  ?
																	  this[In]
																	  :
																	  void
																	  0
																	  }
																	  }),
																	  st)
																	  b[B]
																	  &&
																	  Ft(b[B],
																	  In,
																	  B);
																	  var
																	  Ve={
																	  NATIVE_ARRAY_BUFFER_VIEWS:
																	  lt,
																	  TYPED_ARRAY_CONSTRUCTOR:
																	  Mn,
																	  TYPED_ARRAY_TAG:
																	  Ho
																	  &&
																	  In,
																	  aTypedArray:
																	  function(t)
																	  {
																	  if
																	  (Vr(t))
																	  return
																	  t;
																	  throw
																	  _n("Target
																	  is
																	  not
																	  a
																	  typed
																	  array")
																	  },
																	  aTypedArrayConstructor:
																	  function(t)
																	  {
																	  if
																	  (A(t)
																	  &&
																	  (!rt
																	  ||
																	  At(tt,
																	  t)))
																	  return
																	  t;
																	  throw
																	  _n(qt(t)
																	  +" is not a typed array constructor"
																	  )
																	  },
																	  exportTypedArrayMethod:
																	  function(t,
																	  e,
																	  n,
																	  r)
																	  {
																	  if
																	  (R)
																	  {
																	  if
																	  (n)
																	  for
																	  (var
																	  o
																	  in
																	  st)
																	  {
																	  var
																	  a=b[o];
																	  if
																	  (a
																	  &&
																	  S(a.prototype,
																	  t))
																	  try
																	  {
																	  delete
																	  a.prototype[t]
																	  }
																	  catch
																	  {
																	  try
																	  {
																	  a.prototype[t]=e
																	  }
																	  catch
																	  {}
																	  }
																	  }
																	  Q[t]
																	  &&
																	  !n
																	  ||
																	  V(Q,
																	  t,
																	  n
																	  ?
																	  e
																	  :
																	  lt
																	  &&
																	  kn[t]
																	  ||
																	  e,
																	  r)
																	  }
																	  },
																	  exportTypedArrayStaticMethod:
																	  function(t,
																	  e,
																	  n)
																	  {
																	  var
																	  r,
																	  o;
																	  if
																	  (R)
																	  {
																	  if
																	  (rt)
																	  {
																	  if
																	  (n)
																	  {
																	  for
																	  (r
																	  in
																	  st)
																	  if
																	  ((o=b[r])
																	  &&
																	  S(o,
																	  t))
																	  try
																	  {
																	  delete
																	  o[t]
																	  }
																	  catch
																	  {}
																	  }
																	  if
																	  (tt[t]
																	  &&
																	  !n)
																	  return;
																	  try
																	  {
																	  return
																	  V(tt,
																	  t,
																	  n
																	  ?
																	  e
																	  :
																	  lt
																	  &&
																	  tt[t]
																	  ||
																	  e)
																	  }
																	  catch
																	  {}
																	  }
																	  for
																	  (r
																	  in
																	  st)
																	  !(o=b[r])
																	  ||
																	  o[t]
																	  &&
																	  !n
																	  ||
																	  V(o,
																	  t,
																	  e)
																	  }
																	  },
																	  isView:
																	  function(t)
																	  {
																	  if
																	  (!P(t))
																	  return
																	  !1;
																	  var
																	  e=Gt(t);
																	  return
																	  e==="DataView"
																	  ||
																	  S(st,
																	  e)
																	  ||
																	  S(qn,
																	  e)
																	  },
																	  isTypedArray:
																	  Vr,
																	  TypedArray:
																	  tt,
																	  TypedArrayPrototype:
																	  Q
																	  }
																	  ,
																	  Ic=b.TypeError
																	  ,
																	  Tc=W("species"
																	  )
																	  ,
																	  Oc=function(t,
																	  e)
																	  {
																	  var
																	  n,
																	  r=G(t).constructor;
																	  return
																	  r===void
																	  0
																	  ||
																	  (n=G(r)[Tc])==
																	  null?
																	  e
																	  :
																	  function(o)
																	  {
																	  if
																	  (Vn(o))
																	  return
																	  o;
																	  throw
																	  Ic(qt(o)
																	  +" is not a constructor"
																	  )
																	  }(n)
																	  }
																	  ,
																	  Cc=Ve.TYPED_ARRAY_CONSTRUCTOR
																	  ,
																	  Ec=Ve.aTypedArrayConstructor
																	  ,
																	  Rc=Ve.aTypedArray;
																	  (0,
																	  Ve.exportTypedArrayMethod)("slice",
																	  function(t,
																	  e)
																	  {
																	  for
																	  (var
																	  n,
																	  r=Yn(Rc(this),
																	  t,
																	  e),
																	  o=Ec(Oc(n=
																	  this,n[Cc])),
																	  a=0,
																	  i=r.length,
																	  u=new
																	  o(i);
																	  i> a; )
        u[a] = r[a++];
    return u
}, U(function() {
    new Int8Array(1).slice()
}));
var Tn = W("unscopables")
  , On = Array.prototype;
On[Tn] == null && N.f(On, Tn, {
    configurable: !0,
    value: kt(null)
});
var Ee = function(t) {
    On[Tn][t] = !0
}
  , xc = yo.includes
  , Uc = U(function() {
    return !Array(1).includes()
});
Z({
    target: "Array",
    proto: !0,
    forced: Uc
}, {
    includes: function(t) {
        return xc(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
}),
Ee("includes"),
Xn("Array", "includes");
var jc = I("".indexOf);
Z({
    target: "String",
    proto: !0,
    forced: !wo("includes")
}, {
    includes: function(t) {
        return !!~jc(ft(pe(this)), ft(bo(t)), arguments.length > 1 ? arguments[1] : void 0)
    }
}),
Xn("String", "includes");
var Ac = N.f
  , Lc = nt.set
  , Kc = nt.getterFor("Array Iterator");
Bn(Array, "Array", function(t, e) {
    Lc(this, {
        type: "Array Iterator",
        target: ot(t),
        index: 0,
        kind: e
    })
}, function() {
    var t = Kc(this)
      , e = t.target
      , n = t.kind
      , r = t.index++;
    return !e || r >= e.length ? (t.target = void 0,
    {
        value: void 0,
        done: !0
    }) : n == "keys" ? {
        value: r,
        done: !1
    } : n == "values" ? {
        value: e[r],
        done: !1
    } : {
        value: [r, e[r]],
        done: !1
    }
}, "values");
var Jr = zt.Arguments = zt.Array;
if (Ee("keys"),
Ee("values"),
Ee("entries"),
R && Jr.name !== "values")
    try {
        Ac(Jr, "name", {
            value: "values"
        })
    } catch {}
var Dr = U(function() {
    if (typeof ArrayBuffer == "function") {
        var t = new ArrayBuffer(8);
        Object.isExtensible(t) && Object.defineProperty(t, "a", {
            value: 8
        })
    }
})
  , Ie = Object.isExtensible
  , en = U(function() {
    Ie(1)
}) || Dr ? function(t) {
    return !!P(t) && (!Dr || ut(t) != "ArrayBuffer") && (!Ie || Ie(t))
}
: Ie
  , Pc = !U(function() {
    return Object.isExtensible(Object.preventExtensions({}))
})
  , Dt = Mt(function(t) {
    var e = N.f
      , n = !1
      , r = Lt("meta")
      , o = 0
      , a = function(u) {
        e(u, r, {
            value: {
                objectID: "O" + o++,
                weakData: {}
            }
        })
    }
      , i = t.exports = {
        enable: function() {
            i.enable = function() {}
            ,
            n = !0;
            var u = ue.f
              , s = I([].splice)
              , c = {};
            c[r] = 1,
            u(c).length && (ue.f = function(l) {
                for (var f = u(l), d = 0, h = f.length; d < h;
																		  d++)
																		  if
																		  (f[d]===r)
																		  {
																		  s(f,
																		  d,
																		  1);
																		  break
																		  }
																		  return
																		  f
																		  }
																		  ,
																		  Z({
																		  target:"Object"
																		  ,
																		  stat:
																		  !0,
																		  forced:
																		  !0
																		  },
																		  {
																		  getOwnPropertyNames:
																		  Dn.f
																		  }))
																		  },
																		  fastKey:
																		  function(u,
																		  s)
																		  {
																		  if
																		  (!P(u))
																		  return
																		  typeof
																		  u=="symbol"
																		  ?
																		  u
																		  :
																		  (typeof
																		  u=="string"
																		  ?"S"
																		  :"P"
																		  )
																		  +
																		  u;
																		  if
																		  (!S(u,
																		  r))
																		  {
																		  if
																		  (!en(u))
																		  return"F"
																		  ;
																		  if
																		  (!s)
																		  return"E"
																		  ;
																		  a(u)
																		  }
																		  return
																		  u[r].objectID
																		  },
																		  getWeakData:
																		  function(u,
																		  s)
																		  {
																		  if
																		  (!S(u,
																		  r))
																		  {
																		  if
																		  (!en(u))
																		  return
																		  !0;
																		  if
																		  (!s)
																		  return
																		  !1;
																		  a(u)
																		  }
																		  return
																		  u[r].weakData
																		  },
																		  onFreeze:
																		  function(u)
																		  {
																		  return
																		  Pc
																		  &&
																		  n
																		  &&
																		  en(u)
																		  &&
																		  !S(u,
																		  r)
																		  &&
																		  a(u),
																		  u
																		  }
																		  };
																		  $t[r]=!0
																		  });
																		  Dt.enable,
																		  Dt.fastKey,
																		  Dt.getWeakData,
																		  Dt.onFreeze;
																		  var
																		  Wc=b.TypeError
																		  ,
																		  Re=function(t,
																		  e)
																		  {
																		  this.stopped=t,
																		  this.result=e
																		  }
																		  ,
																		  Yr=Re.prototype
																		  ,
																		  Bo=function(t,
																		  e,
																		  n)
																		  {
																		  var
																		  r,
																		  o,
																		  a,
																		  i,
																		  u,
																		  s,
																		  c,
																		  l=n
																		  &&
																		  n.that,
																		  f=!(!n
																		  ||
																		  !n.AS_ENTRIES),
																		  d=!(!n
																		  ||
																		  !n.IS_ITERATOR),
																		  h=!(!n
																		  ||
																		  !n.INTERRUPTED),
																		  v=Xe(e,
																		  l),
																		  g=function(p)
																		  {
																		  return
																		  r
																		  &&
																		  Sn(r,"normal"
																		  ,
																		  p),
																		  new
																		  Re(!0,p)
																		  },
																		  y=function(p)
																		  {
																		  return
																		  f
																		  ?
																		  (G(p),
																		  h
																		  ?
																		  v(p[0],
																		  p[1],
																		  g)
																		  :
																		  v(p[0],
																		  p[1]))
																		  :
																		  h
																		  ?
																		  v(p,
																		  g)
																		  :
																		  v(p)
																		  };
																		  if
																		  (d)
																		  r=t;
																		  else
																		  {
																		  if
																		  (!(o=zn(t)))
																		  throw
																		  Wc(qt(t)
																		  +" is not iterable"
																		  );
																		  if
																		  (No(o))
																		  {
																		  for
																		  (a=0,
																		  i=te(t);
																		  i> a; a++)
                if ((u = y(t[a])) && At(Yr, u))
                    return u;
            return new Re(!1)
        }
        r = Vo(t, o)
    }
    for (s = r.next; !(c = z(s, r)).done; ) {
        try {
            u = y(c.value)
        } catch (p) {
            Sn(r, "throw", p)
        }
        if (typeof u == "object" && u && At(Yr, u))
            return u
    }
    return new Re(!1)
}
  , Fc = b.TypeError
  , zo = function(t, e) {
    if (At(e, t))
        return t;
    throw Fc("Incorrect invocation")
}
  , Hr = function(t, e, n) {
    for (var r in e)
        V(t, r, e[r], n);
    return t
}
  , Br = W("species")
  , Gc = N.f
  , zr = Dt.fastKey
  , Mr = nt.set
  , nn = nt.getterFor
  , Zc = {
    getConstructor: function(t, e, n, r) {
        var o = t(function(c, l) {
            zo(c, a),
            Mr(c, {
                type: e,
                index: kt(null),
                first: void 0,
                last: void 0,
                size: 0
            }),
            R || (c.size = 0),
            l != null && Bo(l, c[r], {
                that: c,
                AS_ENTRIES: n
            })
        })
          , a = o.prototype
          , i = nn(e)
          , u = function(c, l, f) {
            var d, h, v = i(c), g = s(c, l);
            return g ? g.value = f : (v.last = g = {
                index: h = zr(l, !0),
                key: l,
                value: f,
                previous: d = v.last,
                next: void 0,
                removed: !1
            },
            v.first || (v.first = g),
            d && (d.next = g),
            R ? v.size++ : c.size++,
            h !== "F" && (v.index[h] = g)),
            c
        }
          , s = function(c, l) {
            var f, d = i(c), h = zr(l);
            if (h !== "F")
                return d.index[h];
            for (f = d.first; f; f = f.next)
                if (f.key == l)
                    return f
        };
        return Hr(a, {
            clear: function() {
                for (var c = i(this), l = c.index, f = c.first; f; )
                    f.removed = !0,
                    f.previous && (f.previous = f.previous.next = void 0),
                    delete l[f.index],
                    f = f.next;
                c.first = c.last = void 0,
                R ? c.size = 0 : this.size = 0
            },
            delete: function(c) {
                var l = this
                  , f = i(l)
                  , d = s(l, c);
                if (d) {
                    var h = d.next
                      , v = d.previous;
                    delete f.index[d.index],
                    d.removed = !0,
                    v && (v.next = h),
                    h && (h.previous = v),
                    f.first == d && (f.first = h),
                    f.last == d && (f.last = v),
                    R ? f.size-- : l.size--
                }
                return !!d
            },
            forEach: function(c) {
                for (var l, f = i(this), d = Xe(c, arguments.length > 1 ? arguments[1] : void 0); l = l ? l.next : f.first; )
                    for (d(l.value, l.key, this); l && l.removed; )
                        l = l.previous
            },
            has: function(c) {
                return !!s(this, c)
            }
        }),
        Hr(a, n ? {
            get: function(c) {
                var l = s(this, c);
                return l && l.value
            },
            set: function(c, l) {
                return u(this, c === 0 ? 0 : c, l)
            }
        } : {
            add: function(c) {
                return u(this, c = c === 0 ? 0 : c, c)
            }
        }),
        R && Gc(a, "size", {
            get: function() {
                return i(this).size
            }
        }),
        o
    },
    setStrong: function(t, e, n) {
        var r = e + " Iterator"
          , o = nn(e)
          , a = nn(r);
        Bn(t, e, function(i, u) {
            Mr(this, {
                type: r,
                target: i,
                state: o(i),
                kind: u,
                last: void 0
            })
        }, function() {
            for (var i = a(this), u = i.kind, s = i.last; s && s.removed; )
                s = s.previous;
            return i.target && (i.last = s = s ? s.next : i.state.first) ? u == "keys" ? {
                value: s.key,
                done: !1
            } : u == "values" ? {
                value: s.value,
                done: !1
            } : {
                value: [s.key, s.value],
                done: !1
            } : (i.target = void 0,
            {
                value: void 0,
                done: !0
            })
        }, n ? "entries" : "values", !n, !0),
        function(i) {
            var u = $(i)
              , s = N.f;
            R && u && !u[Br] && s(u, Br, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }(e)
    }
};
function Mo(t) {
    var e = this.constructor;
    return this.then(function(n) {
        return e.resolve(t()).then(function() {
            return n
        })
    }, function(n) {
        return e.resolve(t()).then(function() {
            return e.reject(n)
        })
    })
}
function qo(t) {
    return new this(function(e, n) {
        if (!t || t.length === void 0)
            return n(new TypeError(typeof t + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
        var r = Array.prototype.slice.call(t);
        if (r.length === 0)
            return e([]);
        var o = r.length;
        function a(u, s) {
            if (s && (typeof s == "object" || typeof s == "function")) {
                var c = s.then;
                if (typeof c == "function")
                    return void c.call(s, function(l) {
                        a(u, l)
                    }, function(l) {
                        r[u] = {
                            status: "rejected",
                            reason: l
                        },
                        --o == 0 && e(r)
                    })
            }
            r[u] = {
                status: "fulfilled",
                value: s
            },
            --o == 0 && e(r)
        }
        for (var i = 0; i < r.length;
																			  i++)
																			  a(i,
																			  r[i])
																			  }
																			  )
																			  }
																			  (function(t,
																			  e,
																			  n)
																			  {
																			  var
																			  r=t.indexOf("Map"
																			  )
																			  !==-1
																			  ,
																			  o=t.indexOf("Weak"
																			  )
																			  !==-1
																			  ,
																			  a=r
																			  ?"set"
																			  :"add"
																			  ,
																			  i=b[t]
																			  ,
																			  u=i
																			  &&
																			  i.prototype
																			  ,
																			  s=i
																			  ,
																			  c={}
																			  ,
																			  l=function(y)
																			  {
																			  var
																			  p=I(u[y]);
																			  V(u,
																			  y,
																			  y=="add"
																			  ?
																			  function(m)
																			  {
																			  return
																			  p(this,
																			  m===0
																			  ?
																			  0
																			  :
																			  m),
																			  this
																			  }
																			  :
																			  y=="delete"
																			  ?
																			  function(m)
																			  {
																			  return
																			  !(o
																			  &&
																			  !P(m))
																			  &&
																			  p(this,
																			  m===0
																			  ?
																			  0
																			  :
																			  m)
																			  }
																			  :
																			  y=="get"
																			  ?
																			  function(m)
																			  {
																			  return
																			  o
																			  &&
																			  !P(m)
																			  ?
																			  void
																			  0
																			  :
																			  p(this,
																			  m===0
																			  ?
																			  0
																			  :
																			  m)
																			  }
																			  :
																			  y=="has"
																			  ?
																			  function(m)
																			  {
																			  return
																			  !(o
																			  &&
																			  !P(m))
																			  &&
																			  p(this,
																			  m===0
																			  ?
																			  0
																			  :
																			  m)
																			  }
																			  :
																			  function(m,
																			  w)
																			  {
																			  return
																			  p(this,
																			  m===0
																			  ?
																			  0
																			  :
																			  m,
																			  w),
																			  this
																			  }
																			  )
																			  };
																			  if
																			  (vn(t,
																			  !A(i)
																			  ||
																			  !(o
																			  ||
																			  u.forEach
																			  &&
																			  !U(function()
																			  {
																			  new
																			  i().entries().next()
																			  }))))
																			  s=n.getConstructor(e,
																			  t,
																			  r,
																			  a),
																			  Dt.enable();
																			  else
																			  if
																			  (vn(t,
																			  !0))
																			  {
																			  var
																			  f=new
																			  s
																			  ,
																			  d=f[a](o
																			  ?
																			  {}
																			  :
																			  -0,
																			  1)
																			  !=f
																			  ,
																			  h=U(function()
																			  {
																			  f.has(1)
																			  })
																			  ,
																			  v=Yo(function(y)
																			  {
																			  new
																			  i(y)
																			  })
																			  ,
																			  g=!o
																			  &&
																			  U(function()
																			  {
																			  for
																			  (var
																			  y=new
																			  i,
																			  p=5;
																			  p--;
																			  )
																			  y[a](p,
																			  p);
																			  return
																			  !y.has(-0)
																			  });
																			  v
																			  ||
																			  ((s=e(function(y,
																			  p)
																			  {
																			  zo(y,
																			  u);
																			  var
																			  m=function(w,
																			  x,
																			  k)
																			  {
																			  var
																			  T,
																			  j;
																			  return
																			  rt
																			  &&
																			  A(T=x.constructor)
																			  &&
																			  T
																			  !==k
																			  &&
																			  P(j=T.prototype)
																			  &&
																			  j
																			  !==k.prototype
																			  &&
																			  rt(w,
																			  j),
																			  w
																			  }(new
																			  i,
																			  y,
																			  s);
																			  return
																			  p
																			  !=null
																			  &&
																			  Bo(p,
																			  m[a],
																			  {
																			  that:
																			  m,
																			  AS_ENTRIES:
																			  r
																			  }),
																			  m
																			  })).prototype=u,
																			  u.constructor=s),
																			  (h
																			  ||
																			  g)
																			  &&
																			  (l("delete"),
																			  l("has"),
																			  r
																			  &&
																			  l("get")),
																			  (g
																			  ||
																			  d)
																			  &&
																			  l(a),
																			  o
																			  &&
																			  u.clear
																			  &&
																			  delete
																			  u.clear
																			  }
																			  c[t]=s,
																			  Z({
																			  global:
																			  !0,
																			  forced:
																			  s
																			  !=i
																			  },
																			  c),
																			  bt(s,
																			  t),
																			  o
																			  ||
																			  n.setStrong(s,
																			  t,
																			  r)
																			  }
																			  )("Set",
																			  function(t)
																			  {
																			  return
																			  function()
																			  {
																			  return
																			  t(this,
																			  arguments.length
																			  ?
																			  arguments[0]
																			  :
																			  void
																			  0)
																			  }
																			  },
																			  Zc),
																			  fe.Set;
																			  var
																			  Xc=setTimeout;
																			  function
																			  qr(t)
																			  {
																			  return
																			  !!(t
																			  &&
																			  t.length
																			  !==void
																			  0)
																			  }
																			  function
																			  Nc()
																			  {}
																			  function
																			  K(t)
																			  {
																			  if
																			  (!(this
																			  instanceof
																			  K))
																			  throw
																			  new
																			  TypeError("Promises
																			  must
																			  be
																			  constructed
																			  via
																			  new");
																			  if
																			  (typeof
																			  t
																			  !="function"
																			  )
																			  throw
																			  new
																			  TypeError("not
																			  a
																			  function");
																			  this._state=0,
																			  this._handled=!1,
																			  this._value=void
																			  0,
																			  this._deferreds=[],
																			  $o(t,
																			  this)
																			  }
																			  function
																			  Qo(t,
																			  e)
																			  {
																			  for
																			  (;
																			  t._state===3;
																			  )
																			  t=t._value;
																			  t._state
																			  !==0
																			  ?
																			  (t._handled=!0,
																			  K._immediateFn(function()
																			  {
																			  var
																			  n=t._state===
																			  1?
																			  e.onFulfilled
																			  :
																			  e.onRejected;
																			  if
																			  (n
																			  !==null)
																			  {
																			  var
																			  r;
																			  try
																			  {
																			  r=n(t._value)
																			  }
																			  catch
																			  (o)
																			  {
																			  return
																			  void
																			  de(e.promise,
																			  o)
																			  }
																			  Cn(e.promise,
																			  r)
																			  }
																			  else
																			  (t._state===1
																			  ?
																			  Cn
																			  :
																			  de)(e.promise,
																			  t._value)
																			  }))
																			  :
																			  t._deferreds.push(e)
																			  }
																			  function
																			  Cn(t,
																			  e)
																			  {
																			  try
																			  {
																			  if
																			  (e===t)
																			  throw
																			  new
																			  TypeError("A
																			  promise
																			  cannot
																			  be
																			  resolved
																			  with
																			  itself.");
																			  if
																			  (e
																			  &&
																			  (typeof
																			  e=="object"
																			  ||
																			  typeof
																			  e=="function"
																			  ))
																			  {
																			  var
																			  n=e.then;
																			  if
																			  (e
																			  instanceof
																			  K)
																			  return
																			  t._state=3,
																			  t._value=e,
																			  void
																			  En(t);
																			  if
																			  (typeof
																			  n=="function"
																			  )
																			  return
																			  void
																			  $o((r=n,
																			  o=e,
																			  function()
																			  {
																			  r.apply(o,
																			  arguments)
																			  }
																			  ),
																			  t)
																			  }
																			  t._state=1,
																			  t._value=e,
																			  En(t)
																			  }
																			  catch
																			  (a)
																			  {
																			  de(t,
																			  a)
																			  }
																			  var
																			  r,
																			  o
																			  }
																			  function
																			  de(t,
																			  e)
																			  {
																			  t._state=2,
																			  t._value=e,
																			  En(t)
																			  }
																			  function
																			  En(t)
																			  {
																			  t._state===2
																			  &&
																			  t._deferreds.length===0
																			  &&
																			  K._immediateFn(function()
																			  {
																			  t._handled
																			  ||
																			  K._unhandledRejectionFn(t._value)
																			  });
																			  for
																			  (var
																			  e=0,
																			  n=t._deferreds.length;
																			  e
																			<
																			  n;
																			  e++)
																			  Qo(t,
																			  t._deferreds[e]);
																			  t._deferreds=null
																			  }
																			  function
																			  Vc(t,
																			  e,
																			  n)
																			  {
																			  this.onFulfilled=typeof
																			  t=="function"
																			  ?
																			  t
																			  :
																			  null,
																			  this.onRejected=typeof
																			  e=="function"
																			  ?
																			  e
																			  :
																			  null,
																			  this.promise=n
																			  }
																			  function
																			  $o(t,
																			  e)
																			  {
																			  var
																			  n=!1;
																			  try
																			  {
																			  t(function(r)
																			  {
																			  n
																			  ||
																			  (n=!0,
																			  Cn(e,
																			  r))
																			  },
																			  function(r)
																			  {
																			  n
																			  ||
																			  (n=!0,
																			  de(e,
																			  r))
																			  })
																			  }
																			  catch
																			  (r)
																			  {
																			  if
																			  (n)
																			  return;
																			  n=!0,
																			  de(e,
																			  r)
																			  }
																			  }
																			  K.prototype.catch=function(t)
																			  {
																			  return
																			  this.then(null,
																			  t)
																			  }
																			  ,
																			  K.prototype.then=function(t,
																			  e)
																			  {
																			  var
																			  n=new
																			  this.constructor(Nc);
																			  return
																			  Qo(this,
																			  new
																			  Vc(t,e,n)),
																			  n
																			  }
																			  ,
																			  K.prototype.finally=Mo,
																			  K.all=function(t)
																			  {
																			  return
																			  new
																			  K(function(e,
																			  n)
																			  {
																			  if
																			  (!qr(t))
																			  return
																			  n(new
																			  TypeError("Promise.all
																			  accepts
																			  an
																			  array"));
																			  var
																			  r=Array.prototype.slice.call(t);
																			  if
																			  (r.length===0)
																			  return
																			  e([]);
																			  var
																			  o=r.length;
																			  function
																			  a(u,
																			  s)
																			  {
																			  try
																			  {
																			  if
																			  (s
																			  &&
																			  (typeof
																			  s=="object"
																			  ||
																			  typeof
																			  s=="function"
																			  ))
																			  {
																			  var
																			  c=s.then;
																			  if
																			  (typeof
																			  c=="function"
																			  )
																			  return
																			  void
																			  c.call(s,
																			  function(l)
																			  {
																			  a(u,
																			  l)
																			  },
																			  n)
																			  }
																			  r[u]=s,
																			  --o==0
																			  &&
																			  e(r)
																			  }
																			  catch
																			  (l)
																			  {
																			  n(l)
																			  }
																			  }
																			  for
																			  (var
																			  i=0;
																			  i
																			<
																			  r.length;
																			  i++)
																			  a(i,
																			  r[i])
																			  }
																			  )
																			  }
																			  ,
																			  K.allSettled=qo,
																			  K.resolve=function(t)
																			  {
																			  return
																			  t
																			  &&
																			  typeof
																			  t=="object"
																			  &&
																			  t.constructor===K
																			  ?
																			  t
																			  :
																			  new
																			  K(function(e)
																			  {
																			  e(t)
																			  }
																			  )
																			  }
																			  ,
																			  K.reject=function(t)
																			  {
																			  return
																			  new
																			  K(function(e,
																			  n)
																			  {
																			  n(t)
																			  }
																			  )
																			  }
																			  ,
																			  K.race=function(t)
																			  {
																			  return
																			  new
																			  K(function(e,
																			  n)
																			  {
																			  if
																			  (!qr(t))
																			  return
																			  n(new
																			  TypeError("Promise.race
																			  accepts
																			  an
																			  array"));
																			  for
																			  (var
																			  r=0,
																			  o=t.length;
																			  r
																			<
																			  o;
																			  r++)
																			  K.resolve(t[r]).then(e,
																			  n)
																			  }
																			  )
																			  }
																			  ,
																			  K._immediateFn=typeof
																			  setImmediate=="function"
																			  &&
																			  function(t)
																			  {
																			  setImmediate(t)
																			  }
																			  ||
																			  function(t)
																			  {
																			  Xc(t,
																			  0)
																			  }
																			  ,
																			  K._unhandledRejectionFn=function(t)
																			  {
																			  typeof
																			  console
																			<"u"
																			  &&
																			  console
																			  &&
																			  console.warn("Possible
																			  Unhandled
																			  Promise
																			  Rejection:",
																			  t)
																			  }
																			  ;
																			  var
																			  Xt=function()
																			  {
																			  if
																			  (typeof
																			  self
																			<"u"
																			  )
																			  return
																			  self;
																			  if
																			  (typeof
																			  window
																			<"u"
																			  )
																			  return
																			  window;
																			  if
																			  (typeof
																			  global
																			<"u"
																			  )
																			  return
																			  global;
																			  throw
																			  new
																			  Error("unable
																			  to
																			  locate
																			  global
																			  object")
																			  }();
																			  typeof
																			  Xt.Promise
																			  !="function"
																			  ?
																			  Xt.Promise=K
																			  :
																			  (Xt.Promise.prototype.finally
																			  ||
																			  (Xt.Promise.prototype.finally=Mo),
																			  Xt.Promise.allSettled
																			  ||
																			  (Xt.Promise.allSettled=qo)),
																			  function(t)
																			  {
																			  function
																			  e()
																			  {}
																			  function
																			  n(i,
																			  u)
																			  {
																			  if
																			  (i=i===
																			  void0
																			  ?"utf-8"
																			  :
																			  i,
																			  u=u===
																			  void0
																			  ?
																			  {
																			  fatal:
																			  !1
																			  }
																			  :
																			  u,
																			  o.indexOf(i.toLowerCase())===-1)
																			  throw
																			  new
																			  RangeError("Failed
																			  to
																			  construct'TextDecoder'
																			  :
																			  The
																			  encoding
																			  label
																			  provided
																			  ('"
																			  +
																			  i
																			  +"') is invalid."
																			  );
																			  if
																			  (u.fatal)
																			  throw
																			  Error("Failed
																			  to
																			  construct'TextDecoder'
																			  :
																			  the'fatal'
																			  option
																			  is
																			  unsupported.")
																			  }
																			  function
																			  r(i)
																			  {
																			  for
																			  (var
																			  u=0,
																			  s=Math.min(65536,
																			  i.length
																			  +
																			  1),
																			  c=new
																			  Uint16Array(s),
																			  l=[],
																			  f=0;
																			  ;
																			  )
																			  {
																			  var
																			  d=u
																			<
																			  i.length;
																			  if
																			  (!d
																			  ||
																			  f>= s - 1) {
                if (l.push(String.fromCharCode.apply(null, c.subarray(0, f))),
                !d)
                    return l.join("");
                i = i.subarray(u),
                f = u = 0
            }
            if (!(128 & (d = i[u++])))
                c[f++] = d;
            else if ((224 & d) == 192) {
                var h = 63 & i[u++];
                c[f++] = (31 & d) << 6
																				   |
																				   h
																				   }
																				   else
																				   if
																				   ((240
																				   &
																				   d)==224)
																				   {
																				   h=63
																				   &
																				   i[u++];
																				   var
																				   v=63
																				   &
																				   i[u++];
																				   c[f++]=(31
																				   &
																				   d)
																				<<
																				   12
																				   |
																				   h
																				<<
																				   6
																				   |
																				   v
																				   }
																				   else
																				   (248
																				   &
																				   d)==240
																				   &&
																				   (65535
																				<
																				  (d=(7
																				  &
																				  d)
																				<<
																				   18
																				   |
																				   (h=63
																				   &
																				   i[u++])
																				<<
																				   12
																				   |
																				   (v=63
																				   &
																				   i[u++])
																				<<
																				   6
																				   |
																				   63
																				   &
																				   i[u++])
																				   &&
																				   (d
																				   -=65536,
																				   c[f++]=d>>> 10 & 1023 | 55296,
                d = 56320 | 1023 & d),
                c[f++] = d)
        }
    }
    if (t.TextEncoder && t.TextDecoder)
        return !1;
    var o = ["utf-8", "utf8", "unicode-1-1-utf-8"];
    Object.defineProperty(e.prototype, "encoding", {
        value: "utf-8"
    }),
    e.prototype.encode = function(i, u) {
        if ((u = u === void 0 ? {
            stream: !1
        } : u).stream)
            throw Error("Failed to encode: the 'stream' option is unsupported.");
        u = 0;
        for (var s = i.length, c = 0, l = Math.max(32, s + (s >>> 1) + 7), f = new Uint8Array(l >>> 3 << 3);
																					   u
																					<
																					  s;
																					  )
																					  {
																					  var
																					  d=i.charCodeAt(u++);
																					  if
																					  (55296
																					<=
																					   d
																					   &&
																					   56319>= d) {
                if (u < s)
																						  {
																						  var
																						  h=i.charCodeAt(u);
																						  (64512
																						  &
																						  h)==56320
																						  &&
																						  (++u,
																						  d=((1023
																						  &
																						  d)
																						<<
																						   10)
																						   +
																						   (1023
																						   &
																						   h)
																						   +
																						   65536)
																						   }
																						   if
																						   (55296
																						<=
																						   d
																						   &&
																						   56319>= d)
                    continue
            }
            if (c + 4 > f.length && (l += 8,
            l = (l *= 1 + u / i.length * 2) >>> 3 << 3,
																							   (h=new
																							   Uint8Array(l)).set(f),
																							   f=h),
																							   (4294967168
																							   &
																							   d)==0)
																							   f[c++]=d;
																							   else
																							   {
																							   if
																							   (!(4294965248
																							   &
																							   d))
																							   f[c++]=d>>> 6 & 31 | 192;
                else if (!(4294901760 & d))
                    f[c++] = d >>> 12 & 15 | 224,
                    f[c++] = d >>> 6 & 63 | 128;
                else {
                    if (4292870144 & d)
                        continue;
                    f[c++] = d >>> 18 & 7 | 240,
                    f[c++] = d >>> 12 & 63 | 128,
                    f[c++] = d >>> 6 & 63 | 128
                }
                f[c++] = 63 & d | 128
            }
        }
        return f.slice ? f.slice(0, c) : f.subarray(0, c)
    }
    ,
    Object.defineProperty(n.prototype, "encoding", {
        value: "utf-8"
    }),
    Object.defineProperty(n.prototype, "fatal", {
        value: !1
    }),
    Object.defineProperty(n.prototype, "ignoreBOM", {
        value: !1
    });
    var a = r;
    typeof Buffer == "function" && Buffer.from ? a = function(i) {
        return Buffer.from(i.buffer, i.byteOffset, i.byteLength).toString("utf-8")
    }
    : typeof Blob == "function" && typeof URL == "function" && typeof URL.createObjectURL == "function" && (a = function(i) {
        var u = URL.createObjectURL(new Blob([i],{
            type: "text/plain;charset=UTF-8"
        }));
        try {
            var s = new XMLHttpRequest;
            return s.open("GET", u, !1),
            s.send(),
            s.responseText
        } catch {
            return r(i)
        } finally {
            URL.revokeObjectURL(u)
        }
    }
    ),
    n.prototype.decode = function(i, u) {
        if ((u = u === void 0 ? {
            stream: !1
        } : u).stream)
            throw Error("Failed to decode: the 'stream' option is unsupported.");
        return i = i instanceof Uint8Array ? i : i.buffer instanceof ArrayBuffer ? new Uint8Array(i.buffer) : new Uint8Array(i),
        a(i)
    }
    ,
    t.TextEncoder = e,
    t.TextDecoder = n
}(typeof window < "u"
																								  ?
																								  window
																								  :
																								  et),
																								  function()
																								  {
																								  function
																								  t(y,
																								  p)
																								  {
																								  if
																								  (!(y
																								  instanceof
																								  p))
																								  throw
																								  new
																								  TypeError("Cannot
																								  call
																								  a
																								  class
																								  as
																								  a
																								  function")
																								  }
																								  function
																								  e(y,
																								  p)
																								  {
																								  for
																								  (var
																								  m=0;
																								  m
																								<
																								  p.length;
																								  m++)
																								  {
																								  var
																								  w=p[m];
																								  w.enumerable=w.enumerable
																								  ||
																								  !1,
																								  w.configurable=!0,
																								  "value"in
																								  w
																								  &&
																								  (w.writable=!0),
																								  Object.defineProperty(y,
																								  w.key,
																								  w)
																								  }
																								  }
																								  function
																								  n(y,
																								  p,
																								  m)
																								  {
																								  return
																								  p
																								  &&
																								  e(y.prototype,
																								  p),
																								  y
																								  }
																								  function
																								  r(y,
																								  p)
																								  {
																								  if
																								  (typeof
																								  p
																								  !="function"
																								  &&
																								  p
																								  !==null)
																								  throw
																								  new
																								  TypeError("Super
																								  expression
																								  must
																								  either
																								  be
																								  null
																								  or
																								  a
																								  function");
																								  y.prototype=Object.create(p
																								  &&
																								  p.prototype,
																								  {
																								  constructor:
																								  {
																								  value:
																								  y,
																								  writable:
																								  !0,
																								  configurable:
																								  !0
																								  }
																								  }),
																								  p
																								  &&
																								  a(y,
																								  p)
																								  }
																								  function
																								  o(y)
																								  {
																								  return
																								  o=Object.setPrototypeOf
																								  ?
																								  Object.getPrototypeOf
																								  :
																								  function(p)
																								  {
																								  return
																								  p.__proto__
																								  ||
																								  Object.getPrototypeOf(p)
																								  }
																								  ,
																								  o(y)
																								  }
																								  function
																								  a(y,
																								  p)
																								  {
																								  return
																								  a=Object.setPrototypeOf
																								  ||
																								  function(m,
																								  w)
																								  {
																								  return
																								  m.__proto__=w,
																								  m
																								  }
																								  ,
																								  a(y,
																								  p)
																								  }
																								  function
																								  i()
																								  {
																								  if
																								  (typeof
																								  Reflect> "u" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch {
            return !1
        }
    }
    function u(y) {
        if (y === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return y
    }
    function s(y, p) {
        return !p || typeof p != "object" && typeof p != "function" ? u(y) : p
    }
    function c(y) {
        var p = i();
        return function() {
            var m, w = o(y);
            if (p) {
                var x = o(this).constructor;
                m = Reflect.construct(w, arguments, x)
            } else
                m = w.apply(this, arguments);
            return s(this, m)
        }
    }
    function l(y, p) {
        for (; !Object.prototype.hasOwnProperty.call(y, p) && (y = o(y)) !== null; )
            ;
        return y
    }
    function f(y, p, m) {
        return f = typeof Reflect < "u"
																									  &&
																									  Reflect.get
																									  ?
																									  Reflect.get
																									  :
																									  function(w,
																									  x,
																									  k)
																									  {
																									  var
																									  T=l(w,
																									  x);
																									  if
																									  (T)
																									  {
																									  var
																									  j=Object.getOwnPropertyDescriptor(T,
																									  x);
																									  return
																									  j.get
																									  ?
																									  j.get.call(k)
																									  :
																									  j.value
																									  }
																									  }
																									  ,
																									  f(y,
																									  p,
																									  m
																									  ||
																									  y)
																									  }
																									  var
																									  d=function()
																									  {
																									  function
																									  y()
																									  {
																									  t(this,
																									  y),
																									  Object.defineProperty(this,"listeners"
																									  ,
																									  {
																									  value:
																									  {},
																									  writable:
																									  !0,
																									  configurable:
																									  !0
																									  })
																									  }
																									  return
																									  n(y,
																									  [{
																									  key:"addEventListener"
																									  ,
																									  value:
																									  function(p,
																									  m,
																									  w)
																									  {
																									  p
																									  in
																									  this.listeners
																									  ||
																									  (this.listeners[p]=[]),
																									  this.listeners[p].push({
																									  callback:
																									  m,
																									  options:
																									  w
																									  })
																									  }
																									  },
																									  {
																									  key:"removeEventListener"
																									  ,
																									  value:
																									  function(p,
																									  m)
																									  {
																									  if
																									  (p
																									  in
																									  this.listeners)
																									  {
																									  for
																									  (var
																									  w=this.listeners[p],
																									  x=0,
																									  k=w.length;
																									  x
																									<
																									  k;
																									  x++)
																									  if
																									  (w[x].callback===m)
																									  return
																									  void
																									  w.splice(x,
																									  1)
																									  }
																									  }
																									  },
																									  {
																									  key:"dispatchEvent"
																									  ,
																									  value:
																									  function(p)
																									  {
																									  if
																									  (p.type
																									  in
																									  this.listeners)
																									  {
																									  for
																									  (var
																									  m=this.listeners[p.type].slice(),
																									  w=0,
																									  x=m.length;
																									  w
																									<
																									  x;
																									  w++)
																									  {
																									  var
																									  k=m[w];
																									  try
																									  {
																									  k.callback.call(this,
																									  p)
																									  }
																									  catch
																									  (T)
																									  {
																									  Promise.resolve().then(function()
																									  {
																									  throw
																									  T
																									  })
																									  }
																									  k.options
																									  &&
																									  k.options.once
																									  &&
																									  this.removeEventListener(p.type,
																									  k.callback)
																									  }
																									  return
																									  !p.defaultPrevented
																									  }
																									  }
																									  }]),
																									  y
																									  }()
																									  ,
																									  h=function(y)
																									  {
																									  r(m,
																									  y);
																									  var
																									  p=c(m);
																									  function
																									  m()
																									  {
																									  var
																									  w;
																									  return
																									  t(this,
																									  m),
																									  (w=p.call(this)).listeners
																									  ||
																									  d.call(u(w)),
																									  Object.defineProperty(u(w),"aborted"
																									  ,
																									  {
																									  value:
																									  !1,
																									  writable:
																									  !0,
																									  configurable:
																									  !0
																									  }),
																									  Object.defineProperty(u(w),"onabort"
																									  ,
																									  {
																									  value:
																									  null,
																									  writable:
																									  !0,
																									  configurable:
																									  !0
																									  }),
																									  w
																									  }
																									  return
																									  n(m,
																									  [{
																									  key:"toString"
																									  ,
																									  value:
																									  function()
																									  {
																									  return"[object AbortSignal]"
																									  }
																									  },
																									  {
																									  key:"dispatchEvent"
																									  ,
																									  value:
																									  function(w)
																									  {
																									  w.type==="abort"
																									  &&
																									  (this.aborted=!0,
																									  typeof
																									  this.onabort=="function"
																									  &&
																									  this.onabort.call(this,
																									  w)),
																									  f(o(m.prototype),"dispatchEvent"
																									  ,
																									  this).call(this,
																									  w)
																									  }
																									  }]),
																									  m
																									  }(d)
																									  ,
																									  v=function()
																									  {
																									  function
																									  y()
																									  {
																									  t(this,
																									  y),
																									  Object.defineProperty(this,"signal"
																									  ,
																									  {
																									  value:
																									  new
																									  h,
																									  writable:
																									  !0,
																									  configurable:
																									  !0
																									  })
																									  }
																									  return
																									  n(y,
																									  [{
																									  key:"abort"
																									  ,
																									  value:
																									  function()
																									  {
																									  var
																									  p;
																									  try
																									  {
																									  p=new
																									  Event("abort")
																									  }
																									  catch
																									  {
																									  typeof
																									  document
																									<"u"
																									  ?
																									  document.createEvent
																									  ?
																									  (p=document.createEvent("Event"
																									  )).initEvent("abort",
																									  !1,
																									  !1)
																									  :
																									  (p=document.createEventObject()).type=
																									  "abort":
																									  p={
																									  type:"abort"
																									  ,
																									  bubbles:
																									  !1,
																									  cancelable:
																									  !1
																									  }
																									  }
																									  this.signal.dispatchEvent(p)
																									  }
																									  },
																									  {
																									  key:"toString"
																									  ,
																									  value:
																									  function()
																									  {
																									  return"[object AbortController]"
																									  }
																									  }]),
																									  y
																									  }();
																									  function
																									  g(y)
																									  {
																									  return
																									  y.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
																									  ?
																									  (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true
																									  is
																									  set,
																									  will
																									  force
																									  install
																									  polyfill"),
																									  !0)
																									  :
																									  typeof
																									  y.Request=="function"
																									  &&
																									  !y.Request.prototype.hasOwnProperty("signal")
																									  ||
																									  !y.AbortController
																									  }
																									  typeof
																									  Symbol
																									<"u"
																									  &&
																									  Symbol.toStringTag
																									  &&
																									  (v.prototype[Symbol.toStringTag]="AbortController"
																									  ,
																									  h.prototype[Symbol.toStringTag]="AbortSignal"
																									  ),
																									  function(y)
																									  {
																									  g(y)
																									  &&
																									  (y.AbortController=v,
																									  y.AbortSignal=h)
																									  }(typeof
																									  self
																									<"u"
																									  ?
																									  self
																									  :
																									  et)
																									  }();
																									  var
																									  Ct=Mt(function(t,
																									  e)
																									  {
																									  Object.defineProperty(e,"__esModule"
																									  ,
																									  {
																									  value:
																									  !0
																									  });
																									  var
																									  n=function()
																									  {
																									  function
																									  r()
																									  {
																									  var
																									  o=this;
																									  this.locked=new
																									  Map,
																									  this.addToLocked=function(a,
																									  i)
																									  {
																									  var
																									  u=o.locked.get(a);
																									  u===void
																									  0
																									  ?
																									  i===void
																									  0
																									  ?
																									  o.locked.set(a,
																									  [])
																									  :
																									  o.locked.set(a,
																									  [i])
																									  :
																									  i
																									  !==void
																									  0
																									  &&
																									  (u.unshift(i),
																									  o.locked.set(a,
																									  u))
																									  }
																									  ,
																									  this.isLocked=function(a)
																									  {
																									  return
																									  o.locked.has(a)
																									  }
																									  ,
																									  this.lock=function(a)
																									  {
																									  return
																									  new
																									  Promise(function(i,
																									  u)
																									  {
																									  o.isLocked(a)
																									  ?
																									  o.addToLocked(a,
																									  i)
																									  :
																									  (o.addToLocked(a),
																									  i())
																									  }
																									  )
																									  }
																									  ,
																									  this.unlock=function(a)
																									  {
																									  var
																									  i=o.locked.get(a);
																									  if
																									  (i
																									  !==void
																									  0
																									  &&
																									  i.length
																									  !==0)
																									  {
																									  var
																									  u=i.pop();
																									  o.locked.set(a,
																									  i),
																									  u
																									  !==void
																									  0
																									  &&
																									  setTimeout(u,
																									  0)
																									  }
																									  else
																									  o.locked.delete(a)
																									  }
																									  }
																									  return
																									  r.getInstance=function()
																									  {
																									  return
																									  r.instance===void
																									  0
																									  &&
																									  (r.instance=new
																									  r),
																									  r.instance
																									  }
																									  ,
																									  r
																									  }();
																									  e.default=function()
																									  {
																									  return
																									  n.getInstance()
																									  }
																									  });
																									  jn(Ct);
																									  var
																									  Jc=Mt(function(t,
																									  e)
																									  {
																									  var
																									  n=et
																									  &&
																									  et.__awaiter
																									  ||
																									  function(s,
																									  c,
																									  l,
																									  f)
																									  {
																									  return
																									  new
																									  (l
																									  ||
																									  (l=Promise))(function(d,
																									  h)
																									  {
																									  function
																									  v(p)
																									  {
																									  try
																									  {
																									  y(f.next(p))
																									  }
																									  catch
																									  (m)
																									  {
																									  h(m)
																									  }
																									  }
																									  function
																									  g(p)
																									  {
																									  try
																									  {
																									  y(f.throw(p))
																									  }
																									  catch
																									  (m)
																									  {
																									  h(m)
																									  }
																									  }
																									  function
																									  y(p)
																									  {
																									  p.done
																									  ?
																									  d(p.value)
																									  :
																									  new
																									  l(function(m)
																									  {
																									  m(p.value)
																									  }
																									  ).then(v,
																									  g)
																									  }
																									  y((f=f.apply(s,
																									  c
																									  ||
																									  [])).next())
																									  }
																									  )
																									  }
																									  ,
																									  r=et
																									  &&
																									  et.__generator
																									  ||
																									  function(s,
																									  c)
																									  {
																									  var
																									  l,
																									  f,
																									  d,
																									  h,
																									  v={
																									  label:
																									  0,
																									  sent:
																									  function()
																									  {
																									  if
																									  (1
																									  &
																									  d[0])
																									  throw
																									  d[1];
																									  return
																									  d[1]
																									  },
																									  trys:
																									  [],
																									  ops:
																									  []
																									  };
																									  return
																									  h={
																									  next:
																									  g(0),
																									  throw:
																									  g(1),
																									  return:
																									  g(2)
																									  },
																									  typeof
																									  Symbol=="function"
																									  &&
																									  (h[Symbol.iterator]=function()
																									  {
																									  return
																									  this
																									  }
																									  ),
																									  h;
																									  function
																									  g(y)
																									  {
																									  return
																									  function(p)
																									  {
																									  return
																									  function(m)
																									  {
																									  if
																									  (l)
																									  throw
																									  new
																									  TypeError("Generator
																									  is
																									  already
																									  executing.");
																									  for
																									  (;
																									  v;
																									  )
																									  try
																									  {
																									  if
																									  (l=1,
																									  f
																									  &&
																									  (d=2
																									  &
																									  m[0]
																									  ?
																									  f.return
																									  :
																									  m[0]
																									  ?
																									  f.throw
																									  ||
																									  ((d=f.return)
																									  &&
																									  d.call(f),
																									  0)
																									  :
																									  f.next)
																									  &&
																									  !(d=d.call(f,
																									  m[1])).done)
																									  return
																									  d;
																									  switch
																									  (f=0,
																									  d
																									  &&
																									  (m=[2
																									  &
																									  m[0],
																									  d.value]),
																									  m[0])
																									  {
																									  case
																									  0:
																									  case
																									  1:
																									  d=m;
																									  break;
																									  case
																									  4:
																									  return
																									  v.label++,
																									  {
																									  value:
																									  m[1],
																									  done:
																									  !1
																									  };
																									  case
																									  5:
																									  v.label++,
																									  f=m[1],
																									  m=[0];
																									  continue;
																									  case
																									  7:
																									  m=v.ops.pop(),
																									  v.trys.pop();
																									  continue;
																									  default:
																									  if
																									  (d=v.trys,
																									  !((d=d.length> 0 && d[d.length - 1]) || m[0] !== 6 && m[0] !== 2)) {
                                    v = 0;
                                    continue
                                }
                                if (m[0] === 3 && (!d || m[1] > d[0] && m[1] < d[3]))
																										  {
																										  v.label=m[1];
																										  break
																										  }
																										  if
																										  (m[0]===6
																										  &&
																										  v.label
																										<
																										  d[1])
																										  {
																										  v.label=d[1],
																										  d=m;
																										  break
																										  }
																										  if
																										  (d
																										  &&
																										  v.label
																										<
																										  d[2])
																										  {
																										  v.label=d[2],
																										  v.ops.push(m);
																										  break
																										  }
																										  d[2]
																										  &&
																										  v.ops.pop(),
																										  v.trys.pop();
																										  continue
																										  }
																										  m=c.call(s,
																										  v)
																										  }
																										  catch
																										  (w)
																										  {
																										  m=[6,
																										  w],
																										  f=0
																										  }
																										  finally
																										  {
																										  l=d=
																										  0}
																										  if
																										  (5
																										  &
																										  m[0])
																										  throw
																										  m[1];
																										  return
																										  {
																										  value:
																										  m[0]
																										  ?
																										  m[1]
																										  :
																										  void
																										  0,
																										  done:
																										  !0
																										  }
																										  }([y,
																										  p])
																										  }
																										  }
																										  }
																										  ;
																										  Object.defineProperty(e,"__esModule"
																										  ,
																										  {
																										  value:
																										  !0
																										  });
																										  var
																										  o="browser-tabs-lock-key"
																										  ;
																										  function
																										  a(s)
																										  {
																										  return
																										  new
																										  Promise(function(c)
																										  {
																										  return
																										  setTimeout(c,
																										  s)
																										  }
																										  )
																										  }
																										  function
																										  i(s)
																										  {
																										  for
																										  (var
																										  c="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"
																										  ,
																										  l=""
																										  ,
																										  f=0;
																										  f
																										<
																										  s;
																										  f++)
																										  l
																										  +=c[Math.floor(Math.random()
																										  *
																										  c.length)];
																										  return
																										  l
																										  }
																										  var
																										  u=function()
																										  {
																										  function
																										  s()
																										  {
																										  this.acquiredIatSet=new
																										  Set,
																										  this.id=Date.now().toString()
																										  +
																										  i(15),
																										  this.acquireLock=this.acquireLock.bind(this),
																										  this.releaseLock=this.releaseLock.bind(this),
																										  this.releaseLock__private__=this.releaseLock__private__.bind(this),
																										  this.waitForSomethingToChange=this.waitForSomethingToChange.bind(this),
																										  this.refreshLockWhileAcquired=this.refreshLockWhileAcquired.bind(this),
																										  s.waiters===void
																										  0
																										  &&
																										  (s.waiters=[])
																										  }
																										  return
																										  s.prototype.acquireLock=function(c,
																										  l)
																										  {
																										  return
																										  l===void
																										  0
																										  &&
																										  (l=5e3),
																										  n(this,
																										  void
																										  0,
																										  void
																										  0,
																										  function()
																										  {
																										  var
																										  f,
																										  d,
																										  h,
																										  v,
																										  g,
																										  y;
																										  return
																										  r(this,
																										  function(p)
																										  {
																										  switch
																										  (p.label)
																										  {
																										  case
																										  0:
																										  f=Date.now()
																										  +
																										  i(4),
																										  d=Date.now()
																										  +
																										  l,
																										  h=o
																										  +"-"
																										  +
																										  c,
																										  v=window.localStorage,
																										  p.label=1;
																										  case
																										  1:
																										  return
																										  Date.now()
																										<
																										  d
																										  ?
																										  [4,
																										  a(30)]
																										  :
																										  [3,
																										  8];
																										  case
																										  2:
																										  return
																										  p.sent(),
																										  v.getItem(h)
																										  !==null
																										  ?
																										  [3,
																										  5]
																										  :
																										  (g=this.id
																										  +"-"
																										  +
																										  c
																										  +"-"
																										  +
																										  f,
																										  [4,
																										  a(Math.floor(25
																										  *
																										  Math.random()))]);
																										  case
																										  3:
																										  return
																										  p.sent(),
																										  v.setItem(h,
																										  JSON.stringify({
																										  id:
																										  this.id,
																										  iat:
																										  f,
																										  timeoutKey:
																										  g,
																										  timeAcquired:
																										  Date.now(),
																										  timeRefreshed:
																										  Date.now()
																										  })),
																										  [4,
																										  a(30)];
																										  case
																										  4:
																										  return
																										  p.sent(),
																										  (y=v.getItem(h))
																										  !==null
																										  &&
																										  (y=JSON.parse(y)).id===
																										  this.id&&
																										  y.iat===f
																										  ?
																										  (this.acquiredIatSet.add(f),
																										  this.refreshLockWhileAcquired(h,
																										  f),
																										  [2,
																										  !0])
																										  :
																										  [3,
																										  7];
																										  case
																										  5:
																										  return
																										  s.lockCorrector(),
																										  [4,
																										  this.waitForSomethingToChange(d)];
																										  case
																										  6:
																										  p.sent(),
																										  p.label=7;
																										  case
																										  7:
																										  return
																										  f=Date.now()
																										  +
																										  i(4),
																										  [3,
																										  1];
																										  case
																										  8:
																										  return
																										  [2,
																										  !1]
																										  }
																										  })
																										  })
																										  }
																										  ,
																										  s.prototype.refreshLockWhileAcquired=function(c,
																										  l)
																										  {
																										  return
																										  n(this,
																										  void
																										  0,
																										  void
																										  0,
																										  function()
																										  {
																										  var
																										  f=this;
																										  return
																										  r(this,
																										  function(d)
																										  {
																										  return
																										  setTimeout(function()
																										  {
																										  return
																										  n(f,
																										  void
																										  0,
																										  void
																										  0,
																										  function()
																										  {
																										  var
																										  h,
																										  v;
																										  return
																										  r(this,
																										  function(g)
																										  {
																										  switch
																										  (g.label)
																										  {
																										  case
																										  0:
																										  return
																										  [4,
																										  Ct.default().lock(l)];
																										  case
																										  1:
																										  return
																										  g.sent(),
																										  this.acquiredIatSet.has(l)
																										  ?
																										  (h=window.localStorage,
																										  (v=h.getItem(c))===
																										  null?
																										  (Ct.default().unlock(l),
																										  [2])
																										  :
																										  ((v=JSON.parse(v)).timeRefreshed=
																										  Date.now(),h.setItem(c,
																										  JSON.stringify(v)),
																										  Ct.default().unlock(l),
																										  this.refreshLockWhileAcquired(c,
																										  l),
																										  [2]))
																										  :
																										  (Ct.default().unlock(l),
																										  [2])
																										  }
																										  })
																										  })
																										  },
																										  1e3),
																										  [2]
																										  })
																										  })
																										  }
																										  ,
																										  s.prototype.waitForSomethingToChange=function(c)
																										  {
																										  return
																										  n(this,
																										  void
																										  0,
																										  void
																										  0,
																										  function()
																										  {
																										  return
																										  r(this,
																										  function(l)
																										  {
																										  switch
																										  (l.label)
																										  {
																										  case
																										  0:
																										  return
																										  [4,
																										  new
																										  Promise(function(f)
																										  {
																										  var
																										  d=!1
																										  ,
																										  h=Date.now()
																										  ,
																										  v=!1;
																										  function
																										  g()
																										  {
																										  if
																										  (v
																										  ||
																										  (window.removeEventListener("storage",
																										  g),
																										  s.removeFromWaiting(g),
																										  clearTimeout(y),
																										  v=!0),
																										  !d)
																										  {
																										  d=!0;
																										  var
																										  p=50
																										  -
																										  (Date.now()
																										  -
																										  h);
																										  p> 0 ? setTimeout(f, p) : f()
                                }
                            }
                            window.addEventListener("storage", g),
                            s.addToWaiting(g);
                            var y = setTimeout(g, Math.max(0, c - Date.now()))
                        }
                        )];
                    case 1:
                        return l.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        s.addToWaiting = function(c) {
            this.removeFromWaiting(c),
            s.waiters !== void 0 && s.waiters.push(c)
        }
        ,
        s.removeFromWaiting = function(c) {
            s.waiters !== void 0 && (s.waiters = s.waiters.filter(function(l) {
                return l !== c
            }))
        }
        ,
        s.notifyWaiters = function() {
            s.waiters !== void 0 && s.waiters.slice().forEach(function(c) {
                return c()
            })
        }
        ,
        s.prototype.releaseLock = function(c) {
            return n(this, void 0, void 0, function() {
                return r(this, function(l) {
                    switch (l.label) {
                    case 0:
                        return [4, this.releaseLock__private__(c)];
                    case 1:
                        return [2, l.sent()]
                    }
                })
            })
        }
        ,
        s.prototype.releaseLock__private__ = function(c) {
            return n(this, void 0, void 0, function() {
                var l, f, d;
                return r(this, function(h) {
                    switch (h.label) {
                    case 0:
                        return l = window.localStorage,
                        f = o + "-" + c,
                        (d = l.getItem(f)) === null ? [2] : (d = JSON.parse(d)).id !== this.id ? [3, 2] : [4, Ct.default().lock(d.iat)];
                    case 1:
                        h.sent(),
                        this.acquiredIatSet.delete(d.iat),
                        l.removeItem(f),
                        Ct.default().unlock(d.iat),
                        s.notifyWaiters(),
                        h.label = 2;
                    case 2:
                        return [2]
                    }
                })
            })
        }
        ,
        s.lockCorrector = function() {
            for (var c = Date.now() - 5e3, l = window.localStorage, f = Object.keys(l), d = !1, h = 0; h < f.length;
																											  h++)
																											  {
																											  var
																											  v=f[h];
																											  if
																											  (v.includes(o))
																											  {
																											  var
																											  g=l.getItem(v);
																											  g
																											  !==null
																											  &&
																											  ((g=JSON.parse(g)).timeRefreshed===
																											  void0
																											  &&
																											  g.timeAcquired
																											<
																											  c
																											  ||
																											  g.timeRefreshed
																											  !==void
																											  0
																											  &&
																											  g.timeRefreshed
																											<
																											  c)
																											  &&
																											  (l.removeItem(v),
																											  d=!0)
																											  }
																											  }
																											  d
																											  &&
																											  s.notifyWaiters()
																											  }
																											  ,
																											  s.waiters=void
																											  0,
																											  s
																											  }();
																											  e.default=u
																											  })
																											  ,
																											  Dc=jn(Jc)
																											  ,
																											  Yc={
																											  timeoutInSeconds:
																											  60
																											  }
																											  ,
																											  Hc=["login_required"
																											  ,"consent_required"
																											  ,"interaction_required"
																											  ,"account_selection_required"
																											  ,"access_denied"
																											  ]
																											  ,
																											  ti={
																											  name:"auth0-spa-js"
																											  ,
																											  version:"1.22.0"
																											  }
																											  ,
																											  ei=function()
																											  {
																											  return
																											  Date.now()
																											  }
																											  ,
																											  ht=function(t)
																											  {
																											  function
																											  e(n,
																											  r)
																											  {
																											  var
																											  o=t.call(this,
																											  r)
																											  ||
																											  this;
																											  return
																											  o.error=n,
																											  o.error_description=r,
																											  Object.setPrototypeOf(o,
																											  e.prototype),
																											  o
																											  }
																											  return
																											  Wt(e,
																											  t),
																											  e.fromPayload=function(n)
																											  {
																											  return
																											  new
																											  e(n.error,n.error_description)
																											  }
																											  ,
																											  e
																											  }(Error)
																											  ,
																											  Bc=function(t)
																											  {
																											  function
																											  e(n,
																											  r,
																											  o,
																											  a)
																											  {
																											  a===void
																											  0
																											  &&
																											  (a=null);
																											  var
																											  i=t.call(this,
																											  n,
																											  r)
																											  ||
																											  this;
																											  return
																											  i.state=o,
																											  i.appState=a,
																											  Object.setPrototypeOf(i,
																											  e.prototype),
																											  i
																											  }
																											  return
																											  Wt(e,
																											  t),
																											  e
																											  }(ht)
																											  ,
																											  Rn=function(t)
																											  {
																											  function
																											  e()
																											  {
																											  var
																											  n=t.call(this,
																											  "timeout","Timeout"
																											  )
																											  ||
																											  this;
																											  return
																											  Object.setPrototypeOf(n,
																											  e.prototype),
																											  n
																											  }
																											  return
																											  Wt(e,
																											  t),
																											  e
																											  }(ht)
																											  ,
																											  zc=function(t)
																											  {
																											  function
																											  e(n)
																											  {
																											  var
																											  r=t.call(this)
																											  ||
																											  this;
																											  return
																											  r.popup=n,
																											  Object.setPrototypeOf(r,
																											  e.prototype),
																											  r
																											  }
																											  return
																											  Wt(e,
																											  t),
																											  e
																											  }(Rn)
																											  ,
																											  Mc=function(t)
																											  {
																											  function
																											  e(n)
																											  {
																											  var
																											  r=t.call(this,
																											  "cancelled","Popup closed"
																											  )
																											  ||
																											  this;
																											  return
																											  r.popup=n,
																											  Object.setPrototypeOf(r,
																											  e.prototype),
																											  r
																											  }
																											  return
																											  Wt(e,
																											  t),
																											  e
																											  }(ht)
																											  ,
																											  qc=function(t)
																											  {
																											  function
																											  e(n,
																											  r,
																											  o)
																											  {
																											  var
																											  a=t.call(this,
																											  n,
																											  r)
																											  ||
																											  this;
																											  return
																											  a.mfa_token=o,
																											  Object.setPrototypeOf(a,
																											  e.prototype),
																											  a
																											  }
																											  return
																											  Wt(e,
																											  t),
																											  e
																											  }(ht)
																											  ,
																											  Qc=function(t)
																											  {
																											  function
																											  e(n,
																											  r)
																											  {
																											  var
																											  o=t.call(this,
																											  "missing_refresh_token","Missing Refresh Token (audience: '"
																											  .concat($r(n,
																											  ["default"]),"', scope: '"
																											  ).concat($r(r),"')"
																											  ))
																											  ||
																											  this;
																											  return
																											  o.audience=n,
																											  o.scope=r,
																											  Object.setPrototypeOf(o,
																											  e.prototype),
																											  o
																											  }
																											  return
																											  Wt(e,
																											  t),
																											  e
																											  }(ht)
																											  ,
																											  $c=function(t)
																											  {
																											  return
																											  new
																											  Promise(function(e,
																											  n)
																											  {
																											  var
																											  r,
																											  o=setInterval(function()
																											  {
																											  t.popup
																											  &&
																											  t.popup.closed
																											  &&
																											  (clearInterval(o),
																											  clearTimeout(a),
																											  window.removeEventListener("message",
																											  r,
																											  !1),
																											  n(new
																											  Mc(t.popup)))
																											  },
																											  1e3),
																											  a=setTimeout(function()
																											  {
																											  clearInterval(o),
																											  n(new
																											  zc(t.popup)),
																											  window.removeEventListener("message",
																											  r,
																											  !1)
																											  },
																											  1e3
																											  *
																											  (t.timeoutInSeconds
																											  ||
																											  60));
																											  r=function(i)
																											  {
																											  if
																											  (i.data
																											  &&
																											  i.data.type==="authorization_response"
																											  )
																											  {
																											  if
																											  (clearTimeout(a),
																											  clearInterval(o),
																											  window.removeEventListener("message",
																											  r,
																											  !1),
																											  t.popup.close(),
																											  i.data.response.error)
																											  return
																											  n(ht.fromPayload(i.data.response));
																											  e(i.data.response)
																											  }
																											  }
																											  ,
																											  window.addEventListener("message",
																											  r)
																											  }
																											  )
																											  }
																											  ,
																											  Qn=function()
																											  {
																											  return
																											  window.crypto
																											  ||
																											  window.msCrypto
																											  }
																											  ,
																											  ni=function()
																											  {
																											  var
																											  t=Qn();
																											  return
																											  t.subtle
																											  ||
																											  t.webkitSubtle
																											  }
																											  ,
																											  it=function()
																											  {
																											  var
																											  t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~."
																											  ,
																											  e=""
																											  ;
																											  return
																											  Array.from(Qn().getRandomValues(new
																											  Uint8Array(43))).forEach(function(n)
																											  {
																											  return
																											  e
																											  +=t[n
																											  %
																											  t.length]
																											  }),
																											  e
																											  }
																											  ,
																											  Nt=function(t)
																											  {
																											  return
																											  btoa(t)
																											  }
																											  ,
																											  xn=function(t)
																											  {
																											  return
																											  Object.keys(t).filter(function(e)
																											  {
																											  return
																											  t[e]
																											  !==void
																											  0
																											  }).map(function(e)
																											  {
																											  return
																											  encodeURIComponent(e)
																											  +"="
																											  +
																											  encodeURIComponent(t[e])
																											  }).join("&")
																											  }
																											  ,
																											  rn=function(t)
																											  {
																											  return
																											  O(void
																											  0,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  e;
																											  return
																											  C(this,
																											  function(n)
																											  {
																											  switch
																											  (n.label)
																											  {
																											  case
																											  0:
																											  return
																											  e=ni().digest({
																											  name:"SHA-256"
																											  },
																											  new
																											  TextEncoder().encode(t)),
																											  window.msCrypto
																											  ?
																											  [2,
																											  new
																											  Promise(function(r,
																											  o)
																											  {
																											  e.oncomplete=function(a)
																											  {
																											  r(a.target.result)
																											  }
																											  ,
																											  e.onerror=function(a)
																											  {
																											  o(a.error)
																											  }
																											  ,
																											  e.onabort=function()
																											  {
																											  o("The
																											  digest
																											  operation
																											  was
																											  aborted")
																											  }
																											  }
																											  )]
																											  :
																											  [4,
																											  e];
																											  case
																											  1:
																											  return
																											  [2,
																											  n.sent()]
																											  }
																											  })
																											  })
																											  }
																											  ,
																											  Qr=function(t)
																											  {
																											  return
																											  function(e)
																											  {
																											  return
																											  decodeURIComponent(atob(e).split("").map(function(n)
																											  {
																											  return"%"
																											  +
																											  ("00"
																											  +
																											  n.charCodeAt(0).toString(16)).slice(-2)
																											  }).join(""))
																											  }(t.replace(
																											  _
																											  g,"/"
																											  ).replace(
																											  -
																											  g,"+"
																											  ))
																											  }
																											  ,
																											  on=function(t)
																											  {
																											  var
																											  e=new
																											  Uint8Array(t);
																											  return
																											  function(n)
																											  {
																											  var
																											  r={
																											  "+":"-"
																											  ,"/"
																											  :"_"
																											  ,"="
																											  :""
																											  };
																											  return
																											  n.replace(
																											  [+=]/g,
																											  function(o)
																											  {
																											  return
																											  r[o]
																											  })
																											  }(window.btoa(String.fromCharCode.apply(String,
																											  fn([],
																											  Ht(Array.from(e)),
																											  !1))))
																											  };
																											  function
																											  $r(t,
																											  e)
																											  {
																											  return
																											  e===void
																											  0
																											  &&
																											  (e=[]),
																											  t
																											  &&
																											  !e.includes(t)
																											  ?
																											  t
																											  :""
																											  }
																											  var
																											  ts=function(t,
																											  e)
																											  {
																											  return
																											  O(void
																											  0,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  n,
																											  r;
																											  return
																											  C(this,
																											  function(o)
																											  {
																											  switch
																											  (o.label)
																											  {
																											  case
																											  0:
																											  return
																											  [4,
																											  (a=t,
																											  i=e,
																											  i=i
																											  ||
																											  {},
																											  new
																											  Promise(function(u,
																											  s)
																											  {
																											  var
																											  c=new
																											  XMLHttpRequest
																											  ,
																											  l=[]
																											  ,
																											  f=[]
																											  ,
																											  d={}
																											  ,
																											  h=function()
																											  {
																											  return
																											  {
																											  ok:
																											  (c.status
																											  100
																											  |
																											  0)==2,
																											  statusText:
																											  c.statusText,
																											  status:
																											  c.status,
																											  url:
																											  c.responseURL,
																											  text:
																											  function()
																											  {
																											  return
																											  Promise.resolve(c.responseText)
																											  },
																											  json:
																											  function()
																											  {
																											  return
																											  Promise.resolve(c.responseText).then(JSON.parse)
																											  },
																											  blob:
																											  function()
																											  {
																											  return
																											  Promise.resolve(new
																											  Blob([c.response]))
																											  },
																											  clone:
																											  h,
																											  headers:
																											  {
																											  keys:
																											  function()
																											  {
																											  return
																											  l
																											  },
																											  entries:
																											  function()
																											  {
																											  return
																											  f
																											  },
																											  get:
																											  function(g)
																											  {
																											  return
																											  d[g.toLowerCase()]
																											  },
																											  has:
																											  function(g)
																											  {
																											  return
																											  g.toLowerCase()in
																											  d
																											  }
																											  }
																											  }
																											  };
																											  for
																											  (var
																											  v
																											  in
																											  c.open(i.method
																											  ||"get"
																											  ,
																											  a,
																											  !0),
																											  c.onload=function()
																											  {
																											  c.getAllResponseHeaders().replace(
																											  ^(.*?):[^\S\n]*([\s\S]*?)$
																											  gm,
																											  function(g,
																											  y,
																											  p)
																											  {
																											  l.push(y=y.toLowerCase()),
																											  f.push([y,
																											  p]),
																											  d[y]=d[y]
																											  ?
																											  d[y]
																											  +","
																											  +
																											  p
																											  :
																											  p
																											  }),
																											  u(h())
																											  }
																											  ,
																											  c.onerror=s,
																											  c.withCredentials=i.credentials==
																											  "include",i.headers)
																											  c.setRequestHeader(v,
																											  i.headers[v]);
																											  c.send(i.body
																											  ||
																											  null)
																											  }
																											  ))];
																											  case
																											  1:
																											  return
																											  n=o.sent(),
																											  r={
																											  ok:
																											  n.ok
																											  },
																											  [4,
																											  n.json()];
																											  case
																											  2:
																											  return
																											  [2,
																											  (r.json=o.sent(),
																											  r)]
																											  }
																											  var
																											  a,
																											  i
																											  })
																											  })
																											  }
																											  ,
																											  es=function(t,
																											  e,
																											  n)
																											  {
																											  return
																											  O(void
																											  0,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  r,
																											  o;
																											  return
																											  C(this,
																											  function(a)
																											  {
																											  return
																											  r=new
																											  AbortController,
																											  e.signal=r.signal,
																											  [2,
																											  Promise.race([ts(t,
																											  e),
																											  new
																											  Promise(function(i,
																											  u)
																											  {
																											  o=setTimeout(function()
																											  {
																											  r.abort(),
																											  u(new
																											  Error("Timeout
																											  when
																											  executing'fetch'
																											  "))
																											  },
																											  n)
																											  }
																											  )]).finally(function()
																											  {
																											  clearTimeout(o)
																											  })]
																											  })
																											  })
																											  }
																											  ,
																											  ns=function(t,
																											  e,
																											  n,
																											  r,
																											  o,
																											  a,
																											  i)
																											  {
																											  return
																											  O(void
																											  0,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  return
																											  C(this,
																											  function(u)
																											  {
																											  return
																											  [2,
																											  (s={
																											  auth:
																											  {
																											  audience:
																											  e,
																											  scope:
																											  n
																											  },
																											  timeout:
																											  o,
																											  fetchUrl:
																											  t,
																											  fetchOptions:
																											  r,
																											  useFormData:
																											  i
																											  },
																											  c=a,
																											  new
																											  Promise(function(l,
																											  f)
																											  {
																											  var
																											  d=new
																											  MessageChannel;
																											  d.port1.onmessage=function(h)
																											  {
																											  h.data.error
																											  ?
																											  f(new
																											  Error(h.data.error))
																											  :
																											  l(h.data)
																											  }
																											  ,
																											  c.postMessage(s,
																											  [d.port2])
																											  }
																											  ))];
																											  var
																											  s,
																											  c
																											  })
																											  })
																											  }
																											  ,
																											  rs=function(t,
																											  e,
																											  n,
																											  r,
																											  o,
																											  a,
																											  i)
																											  {
																											  return
																											  i===void
																											  0
																											  &&
																											  (i=1e4),
																											  O(void
																											  0,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  return
																											  C(this,
																											  function(u)
																											  {
																											  return
																											  o
																											  ?
																											  [2,
																											  ns(t,
																											  e,
																											  n,
																											  r,
																											  i,
																											  o,
																											  a)]
																											  :
																											  [2,
																											  es(t,
																											  r,
																											  i)]
																											  })
																											  })
																											  };
																											  function
																											  os(t,
																											  e,
																											  n,
																											  r,
																											  o,
																											  a,
																											  i)
																											  {
																											  return
																											  O(this,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  u,
																											  s,
																											  c,
																											  l,
																											  f,
																											  d,
																											  h,
																											  v,
																											  g;
																											  return
																											  C(this,
																											  function(y)
																											  {
																											  switch
																											  (y.label)
																											  {
																											  case
																											  0:
																											  u=null,
																											  c=0,
																											  y.label=1;
																											  case
																											  1:
																											  if
																											  (!(c
																											<
																											  3))
																											  return
																											  [3,
																											  6];
																											  y.label=2;
																											  case
																											  2:
																											  return
																											  y.trys.push([2,
																											  4,
																											  ,
																											  5]),
																											  [4,
																											  rs(t,
																											  n,
																											  r,
																											  o,
																											  a,
																											  i,
																											  e)];
																											  case
																											  3:
																											  return
																											  s=y.sent(),
																											  u=null,
																											  [3,
																											  6];
																											  case
																											  4:
																											  return
																											  l=y.sent(),
																											  u=l,
																											  [3,
																											  5];
																											  case
																											  5:
																											  return
																											  c++,
																											  [3,
																											  1];
																											  case
																											  6:
																											  if
																											  (u)
																											  throw
																											  u.message=u.message
																											  ||"Failed to fetch"
																											  ,
																											  u;
																											  if
																											  (f=s.json,
																											  d=f.error,
																											  h=f.error_description,
																											  v=D(f,
																											  ["error","error_description"
																											  ]),
																											  !s.ok)
																											  throw
																											  g=h
																											  ||"HTTP error. Unable to fetch "
																											  .concat(t),
																											  d==="mfa_required"
																											  ?
																											  new
																											  qc(d,g,v.mfa_token)
																											  :
																											  new
																											  ht(d
																											  ||"request_error"
																											  ,g);
																											  return
																											  [2,
																											  v]
																											  }
																											  })
																											  })
																											  }
																											  function
																											  Te(t,
																											  e)
																											  {
																											  var
																											  n=t.baseUrl
																											  ,
																											  r=t.timeout
																											  ,
																											  o=t.audience
																											  ,
																											  a=t.scope
																											  ,
																											  i=t.auth0Client
																											  ,
																											  u=t.useFormData
																											  ,
																											  s=D(t,
																											  ["baseUrl","timeout"
																											  ,"audience"
																											  ,"scope"
																											  ,"auth0Client"
																											  ,"useFormData"
																											  ]);
																											  return
																											  O(this,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  c;
																											  return
																											  C(this,
																											  function(l)
																											  {
																											  switch
																											  (l.label)
																											  {
																											  case
																											  0:
																											  return
																											  c=u
																											  ?
																											  xn(s)
																											  :
																											  JSON.stringify(s),
																											  [4,
																											  os("".concat(n,"/oauth/token"
																											  ),
																											  r,
																											  o
																											  ||"default"
																											  ,
																											  a,
																											  {
																											  method:"POST"
																											  ,
																											  body:
																											  c,
																											  headers:
																											  {"Content-Type"
																											  :
																											  u
																											  ?"application/x-www-form-urlencoded"
																											  :"application/json"
																											  ,"Auth0-Client"
																											  :
																											  btoa(JSON.stringify(i
																											  ||
																											  ti))
																											  }
																											  },
																											  e,
																											  u)];
																											  case
																											  1:
																											  return
																											  [2,
																											  l.sent()]
																											  }
																											  })
																											  })
																											  }
																											  var
																											  is=function(t)
																											  {
																											  return
																											  Array.from(new
																											  Set(t))
																											  }
																											  ,
																											  mt=function()
																											  {
																											  for
																											  (var
																											  t=[],
																											  e=0;
																											  e
																											<
																											  arguments.length;
																											  e++)
																											  t[e]=arguments[e];
																											  return
																											  is(t.join("").trim().split(/\s+/)).join("
																											  ")
																											  }
																											  ,
																											  Et=function()
																											  {
																											  function
																											  t(e,
																											  n)
																											  {
																											  n===void
																											  0
																											  &&
																											  (n="@@auth0spajs@@"
																											  ),
																											  this.prefix=n,
																											  this.client_id=e.client_id,
																											  this.scope=e.scope,
																											  this.audience=e.audience
																											  }
																											  return
																											  t.prototype.toKey=function()
																											  {
																											  return""
																											  .concat(this.prefix,"::"
																											  ).concat(this.client_id,"::"
																											  ).concat(this.audience,"::"
																											  ).concat(this.scope)
																											  }
																											  ,
																											  t.fromKey=function(e)
																											  {
																											  var
																											  n=Ht(e.split("::"
																											  ),
																											  4)
																											  ,
																											  r=n[0]
																											  ,
																											  o=n[1]
																											  ,
																											  a=n[2];
																											  return
																											  new
																											  t({
																											  client_id:
																											  o,
																											  scope:
																											  n[3],
																											  audience:
																											  a
																											  },r)
																											  }
																											  ,
																											  t.fromCacheEntry=function(e)
																											  {
																											  return
																											  new
																											  t({
																											  scope:
																											  e.scope,
																											  audience:
																											  e.audience,
																											  client_id:
																											  e.client_id
																											  })
																											  }
																											  ,
																											  t
																											  }()
																											  ,
																											  as=function()
																											  {
																											  function
																											  t()
																											  {}
																											  return
																											  t.prototype.set=function(e,
																											  n)
																											  {
																											  localStorage.setItem(e,
																											  JSON.stringify(n))
																											  }
																											  ,
																											  t.prototype.get=function(e)
																											  {
																											  var
																											  n=window.localStorage.getItem(e);
																											  if
																											  (n)
																											  try
																											  {
																											  return
																											  JSON.parse(n)
																											  }
																											  catch
																											  {
																											  return
																											  }
																											  }
																											  ,
																											  t.prototype.remove=function(e)
																											  {
																											  localStorage.removeItem(e)
																											  }
																											  ,
																											  t.prototype.allKeys=function()
																											  {
																											  return
																											  Object.keys(window.localStorage).filter(function(e)
																											  {
																											  return
																											  e.startsWith("@@auth0spajs@@")
																											  })
																											  }
																											  ,
																											  t
																											  }()
																											  ,
																											  cs=function()
																											  {
																											  var
																											  t;
																											  this.enclosedCache=(t=
																											  {},{
																											  set:
																											  function(e,
																											  n)
																											  {
																											  t[e]=n
																											  },
																											  get:
																											  function(e)
																											  {
																											  var
																											  n=t[e];
																											  if
																											  (n)
																											  return
																											  n
																											  },
																											  remove:
																											  function(e)
																											  {
																											  delete
																											  t[e]
																											  },
																											  allKeys:
																											  function()
																											  {
																											  return
																											  Object.keys(t)
																											  }
																											  })
																											  }
																											  ,
																											  ss=function()
																											  {
																											  function
																											  t(e,
																											  n,
																											  r)
																											  {
																											  this.cache=e,
																											  this.keyManifest=n,
																											  this.nowProvider=r,
																											  this.nowProvider=this.nowProvider
																											  ||
																											  ei
																											  }
																											  return
																											  t.prototype.get=function(e,
																											  n)
																											  {
																											  var
																											  r;
																											  return
																											  n===void
																											  0
																											  &&
																											  (n=0),
																											  O(this,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  o,
																											  a,
																											  i,
																											  u,
																											  s;
																											  return
																											  C(this,
																											  function(c)
																											  {
																											  switch
																											  (c.label)
																											  {
																											  case
																											  0:
																											  return
																											  [4,
																											  this.cache.get(e.toKey())];
																											  case
																											  1:
																											  return
																											  (o=c.sent())
																											  ?
																											  [3,
																											  4]
																											  :
																											  [4,
																											  this.getCacheKeys()];
																											  case
																											  2:
																											  return
																											  (a=c.sent())
																											  ?
																											  (i=this.matchExistingCacheKey(e,
																											  a))
																											  ?
																											  [4,
																											  this.cache.get(i)]
																											  :
																											  [3,
																											  4]
																											  :
																											  [2];
																											  case
																											  3:
																											  o=c.sent(),
																											  c.label=4;
																											  case
																											  4:
																											  return
																											  o
																											  ?
																											  [4,
																											  this.nowProvider()]
																											  :
																											  [2];
																											  case
																											  5:
																											  return
																											  u=c.sent(),
																											  s=Math.floor(u
																											  1e3),
																											  o.expiresAt
																											  -
																											  n
																											<
																											  s
																											  ?
																											  o.body.refresh_token
																											  ?
																											  (o.body={
																											  refresh_token:
																											  o.body.refresh_token
																											  },
																											  [4,
																											  this.cache.set(e.toKey(),
																											  o)])
																											  :
																											  [3,
																											  7]
																											  :
																											  [3,
																											  10];
																											  case
																											  6:
																											  return
																											  c.sent(),
																											  [2,
																											  o.body];
																											  case
																											  7:
																											  return
																											  [4,
																											  this.cache.remove(e.toKey())];
																											  case
																											  8:
																											  return
																											  c.sent(),
																											  [4,
																											  (r=this.keyManifest)===
																											  null||
																											  r===void
																											  0
																											  ?
																											  void
																											  0
																											  :
																											  r.remove(e.toKey())];
																											  case
																											  9:
																											  return
																											  c.sent(),
																											  [2];
																											  case
																											  10:
																											  return
																											  [2,
																											  o.body]
																											  }
																											  })
																											  })
																											  }
																											  ,
																											  t.prototype.set=function(e)
																											  {
																											  var
																											  n;
																											  return
																											  O(this,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  r,
																											  o;
																											  return
																											  C(this,
																											  function(a)
																											  {
																											  switch
																											  (a.label)
																											  {
																											  case
																											  0:
																											  return
																											  r=new
																											  Et({
																											  client_id:
																											  e.client_id,
																											  scope:
																											  e.scope,
																											  audience:
																											  e.audience
																											  }),
																											  [4,
																											  this.wrapCacheEntry(e)];
																											  case
																											  1:
																											  return
																											  o=a.sent(),
																											  [4,
																											  this.cache.set(r.toKey(),
																											  o)];
																											  case
																											  2:
																											  return
																											  a.sent(),
																											  [4,
																											  (n=this.keyManifest)===
																											  null||
																											  n===void
																											  0
																											  ?
																											  void
																											  0
																											  :
																											  n.add(r.toKey())];
																											  case
																											  3:
																											  return
																											  a.sent(),
																											  [2]
																											  }
																											  })
																											  })
																											  }
																											  ,
																											  t.prototype.clear=function(e)
																											  {
																											  var
																											  n;
																											  return
																											  O(this,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  r,
																											  o=this;
																											  return
																											  C(this,
																											  function(a)
																											  {
																											  switch
																											  (a.label)
																											  {
																											  case
																											  0:
																											  return
																											  [4,
																											  this.getCacheKeys()];
																											  case
																											  1:
																											  return
																											  (r=a.sent())
																											  ?
																											  [4,
																											  r.filter(function(i)
																											  {
																											  return
																											  !e
																											  ||
																											  i.includes(e)
																											  }).reduce(function(i,
																											  u)
																											  {
																											  return
																											  O(o,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  return
																											  C(this,
																											  function(s)
																											  {
																											  switch
																											  (s.label)
																											  {
																											  case
																											  0:
																											  return
																											  [4,
																											  i];
																											  case
																											  1:
																											  return
																											  s.sent(),
																											  [4,
																											  this.cache.remove(u)];
																											  case
																											  2:
																											  return
																											  s.sent(),
																											  [2]
																											  }
																											  })
																											  })
																											  },
																											  Promise.resolve())]
																											  :
																											  [2];
																											  case
																											  2:
																											  return
																											  a.sent(),
																											  [4,
																											  (n=this.keyManifest)===
																											  null||
																											  n===void
																											  0
																											  ?
																											  void
																											  0
																											  :
																											  n.clear()];
																											  case
																											  3:
																											  return
																											  a.sent(),
																											  [2]
																											  }
																											  })
																											  })
																											  }
																											  ,
																											  t.prototype.clearSync=function(e)
																											  {
																											  var
																											  n=this
																											  ,
																											  r=this.cache.allKeys();
																											  r
																											  &&
																											  r.filter(function(o)
																											  {
																											  return
																											  !e
																											  ||
																											  o.includes(e)
																											  }).forEach(function(o)
																											  {
																											  n.cache.remove(o)
																											  })
																											  }
																											  ,
																											  t.prototype.wrapCacheEntry=function(e)
																											  {
																											  return
																											  O(this,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  n,
																											  r,
																											  o;
																											  return
																											  C(this,
																											  function(a)
																											  {
																											  switch
																											  (a.label)
																											  {
																											  case
																											  0:
																											  return
																											  [4,
																											  this.nowProvider()];
																											  case
																											  1:
																											  return
																											  n=a.sent(),
																											  r=Math.floor(n
																											  1e3)
																											  +
																											  e.expires_in,
																											  o=Math.min(r,
																											  e.decodedToken.claims.exp),
																											  [2,
																											  {
																											  body:
																											  e,
																											  expiresAt:
																											  o
																											  }]
																											  }
																											  })
																											  })
																											  }
																											  ,
																											  t.prototype.getCacheKeys=function()
																											  {
																											  var
																											  e;
																											  return
																											  O(this,
																											  void
																											  0,
																											  void
																											  0,
																											  function()
																											  {
																											  var
																											  n;
																											  return
																											  C(this,
																											  function(r)
																											  {
																											  switch
																											  (r.label)
																											  {
																											  case
																											  0:
																											  return
																											  this.keyManifest
																											  ?
																											  [4,
																											  this.keyManifest.get()]
																											  :
																											  [3,
																											  2];
																											  case
																											  1:
																											  return
																											  n=(e=
																											  r.sent())===null
																											  ||
																											  e===void
																											  0
																											  ?
																											  void
																											  0
																											  :
																											  e.keys,
																											  [3,
																											  4];
																											  case
																											  2:
																											  return
																											  [4,
																											  this.cache.allKeys()];
																											  case
																											  3:
																											  n=r.sent(),
																											  r.label=4;
																											  case
																											  4:
																											  return
																											  [2,
																											  n]
																											  }
																											  })
																											  })
																											  }
																											  ,
																											  t.prototype.matchExistingCacheKey=function(e,
																											  n)
																											  {
																											  return
																											  n.filter(function(r)
																											  {
																											  var
																											  o=Et.fromKey(r)
																											  ,
																											  a=new
																											  Set(o.scope
																											  &&
																											  o.scope.split(""))
              , i = e.scope.split("
																											  ")
																											  ,
																											  u=o.scope
																											  &&
																											  i.reduce(function(s,
																											  c)
																											  {
																											  return
																											  s
																											  &&
																											  a.has(c)
																											  },
																											  !0);
																											  return
																											  o.prefix==="@@auth0spajs@@"
																											  &&
																											  o.client_id===e.client_id
																											  &&
																											  o.audience===e.audience
																											  &&
																											  u
																											  })[0]
																											  }
																											  ,
																											  t
																											  }()
																											  ,
																											  us=function()
																											  {
																											  function
																											  t(e,
																											  n)
																											  {
																											  this.storage=e,
																											  this.clientId=n,
																											  this.storageKey=""
																											  .concat("a0.spajs.txs","."
																											  ).concat(this.clientId),
																											  this.transaction=this.storage.get(this.storageKey)
																											  }
																											  return
																											  t.prototype.create=function(e)
																											  {
																											  this.transaction=e,
																											  this.storage.save(this.storageKey,
																											  e,
																											  {
																											  daysUntilExpire:
																											  1
																											  })
																											  }
																											  ,
																											  t.prototype.get=function()
																											  {
																											  return
																											  this.transaction
																											  }
																											  ,
																											  t.prototype.remove=function()
																											  {
																											  delete
																											  this.transaction,
																											  this.storage.remove(this.storageKey)
																											  }
																											  ,
																											  t
																											  }()
																											  ,
																											  ae=function(t)
																											  {
																											  return
																											  typeof
																											  t=="number"
																											  }
																											  ,
																											  ls=["iss"
																											  ,"aud"
																											  ,"exp"
																											  ,"nbf"
																											  ,"iat"
																											  ,"jti"
																											  ,"azp"
																											  ,"nonce"
																											  ,"auth_time"
																											  ,"at_hash"
																											  ,"c_hash"
																											  ,"acr"
																											  ,"amr"
																											  ,"sub_jwk"
																											  ,"cnf"
																											  ,"sip_from_tag"
																											  ,"sip_date"
																											  ,"sip_callid"
																											  ,"sip_cseq_num"
																											  ,"sip_via_branch"
																											  ,"orig"
																											  ,"dest"
																											  ,"mky"
																											  ,"events"
																											  ,"toe"
																											  ,"txn"
																											  ,"rph"
																											  ,"sid"
																											  ,"vot"
																											  ,"vtm"
																											  ]
																											  ,
																											  fs=function(t)
																											  {
																											  if
																											  (!t.id_token)
																											  throw
																											  new
																											  Error("ID
																											  token
																											  is
																											  required
																											  but
																											  missing");
																											  var
																											  e=function(u)
																											  {
																											  var
																											  s=u.split("."
																											  )
																											  ,
																											  c=Ht(s,
																											  3)
																											  ,
																											  l=c[0]
																											  ,
																											  f=c[1]
																											  ,
																											  d=c[2];
																											  if
																											  (s.length
																											  !==3
																											  ||
																											  !l
																											  ||
																											  !f
																											  ||
																											  !d)
																											  throw
																											  new
																											  Error("ID
																											  token
																											  could
																											  not
																											  be
																											  decoded");
																											  var
																											  h=JSON.parse(Qr(f))
																											  ,
																											  v={
																											  __raw:
																											  u
																											  }
																											  ,
																											  g={};
																											  return
																											  Object.keys(h).forEach(function(y)
																											  {
																											  v[y]=h[y],
																											  ls.includes(y)
																											  ||
																											  (g[y]=h[y])
																											  }),
																											  {
																											  encoded:
																											  {
																											  header:
																											  l,
																											  payload:
																											  f,
																											  signature:
																											  d
																											  },
																											  header:
																											  JSON.parse(Qr(l)),
																											  claims:
																											  v,
																											  user:
																											  g
																											  }
																											  }(t.id_token);
																											  if
																											  (!e.claims.iss)
																											  throw
																											  new
																											  Error("Issuer
																											  (iss)
																											  claim
																											  must
																											  be
																											  a
																											  string
																											  present
																											  in
																											  the
																											  ID
																											  token");
																											  if
																											  (e.claims.iss
																											  !==t.iss)
																											  throw
																											  new
																											  Error('Issuer
																											  (iss)
																											  claim
																											  mismatch
																											  in
																											  the
																											  ID
																											  token;
																											  expected"'.concat(t.iss, '"
																											  ,
																											  found"').concat(e.claims.iss, '"
																											  '));
																											  if
																											  (!e.user.sub)
																											  throw
																											  new
																											  Error("Subject
																											  (sub)
																											  claim
																											  must
																											  be
																											  a
																											  string
																											  present
																											  in
																											  the
																											  ID
																											  token");
																											  if
																											  (e.header.alg
																											  !=="RS256"
																											  )
																											  throw
																											  new
																											  Error('Signature
																											  algorithm
																											  of"'.concat(e.header.alg, '"
																											  is
																											  not
																											  supported.
																											  Expected
																											  the
																											  ID
																											  token
																											  to
																											  be
																											  signed
																											  with"RS256"
																											  .'));
																											  if
																											  (!e.claims.aud
																											  ||
																											  typeof
																											  e.claims.aud
																											  !="string"
																											  &&
																											  !Array.isArray(e.claims.aud))
																											  throw
																											  new
																											  Error("Audience
																											  (aud)
																											  claim
																											  must
																											  be
																											  a
																											  string
																											  or
																											  array
																											  of
																											  strings
																											  present
																											  in
																											  the
																											  ID
																											  token");
																											  if
																											  (Array.isArray(e.claims.aud))
																											  {
																											  if
																											  (!e.claims.aud.includes(t.aud))
																											  throw
																											  new
																											  Error('Audience
																											  (aud)
																											  claim
																											  mismatch
																											  in
																											  the
																											  ID
																											  token;
																											  expected"'.concat(t.aud, '"
																											  but
																											  was
																											  not
																											  one
																											  of"').concat(e.claims.aud.join("
																											  ,"), '"
																											  '));
																											  if
																											  (e.claims.aud.length> 1) {
            if (!e.claims.azp)
                throw new Error("Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values");
            if (e.claims.azp !== t.aud)
                throw new Error('Authorized Party (azp) claim mismatch in the ID token; expected "'.concat(t.aud, '", found "').concat(e.claims.azp, '"'))
        }
    } else if (e.claims.aud !== t.aud)
        throw new Error('Audience (aud) claim mismatch in the ID token; expected "'.concat(t.aud, '" but found "').concat(e.claims.aud, '"'));
    if (t.nonce) {
        if (!e.claims.nonce)
            throw new Error("Nonce (nonce) claim must be a string present in the ID token");
        if (e.claims.nonce !== t.nonce)
            throw new Error('Nonce (nonce) claim mismatch in the ID token; expected "'.concat(t.nonce, '", found "').concat(e.claims.nonce, '"'))
    }
    if (t.max_age && !ae(e.claims.auth_time))
        throw new Error("Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified");
    if (!ae(e.claims.exp))
        throw new Error("Expiration Time (exp) claim must be a number present in the ID token");
    if (!ae(e.claims.iat))
        throw new Error("Issued At (iat) claim must be a number present in the ID token");
    var n = t.leeway || 60
      , r = new Date(t.now || Date.now())
      , o = new Date(0)
      , a = new Date(0)
      , i = new Date(0);
    if (i.setUTCSeconds(parseInt(e.claims.auth_time) + t.max_age + n),
    o.setUTCSeconds(e.claims.exp + n),
    a.setUTCSeconds(e.claims.nbf - n),
    r > o)
        throw new Error("Expiration Time (exp) claim error in the ID token; current time (".concat(r, ") is after expiration time (").concat(o, ")"));
    if (ae(e.claims.nbf) && r < a)
																												  throw
																												  new
																												  Error("Not
																												  Before
																												  time
																												  (nbf)
																												  claim
																												  in
																												  the
																												  ID
																												  token
																												  indicates
																												  that
																												  this
																												  token
																												  can't
																												  be
																												  used
																												  just
																												  yet.
																												  Currrent
																												  time
																												  (".concat(r,") is before "
																												  ).concat(a));
																												  if
																												  (ae(e.claims.auth_time)
																												  &&
																												  r> i)
        throw new Error("Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (".concat(r, ") is after last auth at ").concat(i));
    if (t.organizationId) {
        if (!e.claims.org_id)
            throw new Error("Organization ID (org_id) claim must be a string present in the ID token");
        if (t.organizationId !== e.claims.org_id)
            throw new Error('Organization ID (org_id) claim mismatch in the ID token; expected "'.concat(t.organizationId, '", found "').concat(e.claims.org_id, '"'))
    }
    return e
}
  , Rt = Mt(function(t, e) {
    var n = et && et.__assign || function() {
        return n = Object.assign || function(s) {
            for (var c, l = 1, f = arguments.length; l < f;
																													  l++)
																													  for
																													  (var
																													  d
																													  in
																													  c=arguments[l])
																													  Object.prototype.hasOwnProperty.call(c,
																													  d)
																													  &&
																													  (s[d]=c[d]);
																													  return
																													  s
																													  }
																													  ,
																													  n.apply(this,
																													  arguments)
																													  }
																													  ;
																													  function
																													  r(s,
																													  c)
																													  {
																													  if
																													  (!c)
																													  return""
																													  ;
																													  var
																													  l="; "
																													  +
																													  s;
																													  return
																													  c===!0
																													  ?
																													  l
																													  :
																													  l
																													  +"="
																													  +
																													  c
																													  }
																													  function
																													  o(s,
																													  c,
																													  l)
																													  {
																													  return
																													  encodeURIComponent(s).replace(
																													  %(23|24|26|2B|5E|60|7C)
																													  g,
																													  decodeURIComponent).replace(
																													  \(
																													  g,"%28"
																													  ).replace(
																													  \)
																													  g,"%29"
																													  )
																													  +"="
																													  +
																													  encodeURIComponent(c).replace(
																													  %(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)
																													  g,
																													  decodeURIComponent)
																													  +
																													  function(f)
																													  {
																													  if
																													  (typeof
																													  f.expires=="number"
																													  )
																													  {
																													  var
																													  d=new
																													  Date;
																													  d.setMilliseconds(d.getMilliseconds()
																													  +
																													  864e5
																													  *
																													  f.expires),
																													  f.expires=d
																													  }
																													  return
																													  r("Expires",
																													  f.expires
																													  ?
																													  f.expires.toUTCString()
																													  :""
																													  )
																													  +
																													  r("Domain",
																													  f.domain)
																													  +
																													  r("Path",
																													  f.path)
																													  +
																													  r("Secure",
																													  f.secure)
																													  +
																													  r("SameSite",
																													  f.sameSite)
																													  }(l)
																													  }
																													  function
																													  a(s)
																													  {
																													  for
																													  (var
																													  c={},
																													  l=s
																													  ?
																													  s.split(";") : [], f = /(%[\dA-F]{2})+/gi, d = 0; d < l.length; d++) {
            var h = l[d].split("=
																													  "),
																													  v=h.slice(1).join("="
																													  );
																													  v.charAt(0)==='"'
																													  &&
																													  (v=v.slice(1,
																													  -1));
																													  try
																													  {
																													  c[h[0].replace(f,
																													  decodeURIComponent)]=v.replace(f,
																													  decodeURIComponent)
																													  }
																													  catch
																													  {}
																													  }
																													  return
																													  c
																													  }
																													  function
																													  i()
																													  {
																													  return
																													  a(document.cookie)
																													  }
																													  function
																													  u(s,
																													  c,
																													  l)
																													  {
																													  document.cookie=o(s,
																													  c,
																													  n({
																													  path:"/"
																													  },
																													  l))
																													  }
																													  e.__esModule=!0,
																													  e.encode=o,
																													  e.parse=a,
																													  e.getAll=i,
																													  e.get=function(s)
																													  {
																													  return
																													  i()[s]
																													  }
																													  ,
																													  e.set=u,
																													  e.remove=function(s,
																													  c)
																													  {
																													  u(s,""
																													  ,
																													  n(n({},
																													  c),
																													  {
																													  expires:
																													  -1
																													  }))
																													  }
																													  });
																													  jn(Rt),
																													  Rt.encode,
																													  Rt.parse,
																													  Rt.getAll;
																													  var
																													  ds=Rt.get
																													  ,
																													  ri=Rt.set
																													  ,
																													  hs=Rt.remove
																													  ,
																													  Vt={
																													  get:
																													  function(t)
																													  {
																													  var
																													  e=ds(t);
																													  if
																													  (e
																													  !==void
																													  0)
																													  return
																													  JSON.parse(e)
																													  },
																													  save:
																													  function(t,
																													  e,
																													  n)
																													  {
																													  var
																													  r={};
																													  window.location.protocol==="https:"
																													  &&
																													  (r={
																													  secure:
																													  !0,
																													  sameSite:"none"
																													  }),
																													  n
																													  !=null
																													  &&
																													  n.daysUntilExpire
																													  &&
																													  (r.expires=n.daysUntilExpire),
																													  n
																													  !=null
																													  &&
																													  n.cookieDomain
																													  &&
																													  (r.domain=n.cookieDomain),
																													  ri(t,
																													  JSON.stringify(e),
																													  r)
																													  },
																													  remove:
																													  function(t)
																													  {
																													  hs(t)
																													  }
																													  }
																													  ,
																													  ps={
																													  get:
																													  function(t)
																													  {
																													  var
																													  e=Vt.get(t);
																													  return
																													  e
																													  ||
																													  Vt.get("".concat("_legacy_").concat(t))
																													  },
																													  save:
																													  function(t,
																													  e,
																													  n)
																													  {
																													  var
																													  r={};
																													  window.location.protocol==="https:"
																													  &&
																													  (r={
																													  secure:
																													  !0
																													  }),
																													  n
																													  !=null
																													  &&
																													  n.daysUntilExpire
																													  &&
																													  (r.expires=n.daysUntilExpire),
																													  ri("".concat("_legacy_").concat(t),
																													  JSON.stringify(e),
																													  r),
																													  Vt.save(t,
																													  e,
																													  n)
																													  },
																													  remove:
																													  function(t)
																													  {
																													  Vt.remove(t),
																													  Vt.remove("".concat("_legacy_").concat(t))
																													  }
																													  }
																													  ,
																													  ys={
																													  get:
																													  function(t)
																													  {
																													  if
																													  (typeof
																													  sessionStorage
																													<"u"
																													  )
																													  {
																													  var
																													  e=sessionStorage.getItem(t);
																													  if
																													  (e
																													  !==void
																													  0)
																													  return
																													  JSON.parse(e)
																													  }
																													  },
																													  save:
																													  function(t,
																													  e)
																													  {
																													  sessionStorage.setItem(t,
																													  JSON.stringify(e))
																													  },
																													  remove:
																													  function(t)
																													  {
																													  sessionStorage.removeItem(t)
																													  }
																													  };
																													  function
																													  vs(t,
																													  e,
																													  n)
																													  {
																													  var
																													  r=e===
																													  void0
																													  ?
																													  null
																													  :
																													  e
																													  ,
																													  o=function(s,
																													  c)
																													  {
																													  var
																													  l=atob(s);
																													  if
																													  (c)
																													  {
																													  for
																													  (var
																													  f=new
																													  Uint8Array(l.length),
																													  d=0,
																													  h=l.length;
																													  d
																													<
																													  h;
																													  ++d)
																													  f[d]=l.charCodeAt(d);
																													  return
																													  String.fromCharCode.apply(null,
																													  new
																													  Uint16Array(f.buffer))
																													  }
																													  return
																													  l
																													  }(t,
																													  n
																													  !==void
																													  0
																													  &&
																													  n)
																													  ,
																													  a=o.indexOf(`
																													  `,
																													  10)
																													  +
																													  1
																													  ,
																													  i=o.substring(a)
																													  +
																													  (r
																													  ?"//# sourceMappingURL="
																													  +
																													  r
																													  :""
																													  )
																													  ,
																													  u=new
																													  Blob([i],{
																													  type:"application/javascript"
																													  });
																													  return
																													  URL.createObjectURL(u)
																													  }
																													  var
																													  to,
																													  eo,
																													  no,
																													  an,
																													  ms=(to=
																													  "Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Ci8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgogICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uCgogICAgUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55CiAgICBwdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuCgogICAgVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEICJBUyBJUyIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEgKICAgIFJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWQogICAgQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULAogICAgSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NCiAgICBMT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUgogICAgT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUgogICAgUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS4KICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovdmFyIHQ9ZnVuY3Rpb24oZSxyKXtyZXR1cm4gdD1PYmplY3Quc2V0UHJvdG90eXBlT2Z8fHtfX3Byb3RvX186W119aW5zdGFuY2VvZiBBcnJheSYmZnVuY3Rpb24odCxlKXt0Ll9fcHJvdG9fXz1lfXx8ZnVuY3Rpb24odCxlKXtmb3IodmFyIHIgaW4gZSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKSYmKHRbcl09ZVtyXSl9LHQoZSxyKX07ZnVuY3Rpb24gZShlLHIpe2lmKCJmdW5jdGlvbiIhPXR5cGVvZiByJiZudWxsIT09cil0aHJvdyBuZXcgVHlwZUVycm9yKCJDbGFzcyBleHRlbmRzIHZhbHVlICIrU3RyaW5nKHIpKyIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbCIpO2Z1bmN0aW9uIG4oKXt0aGlzLmNvbnN0cnVjdG9yPWV9dChlLHIpLGUucHJvdG90eXBlPW51bGw9PT1yP09iamVjdC5jcmVhdGUocik6KG4ucHJvdG90eXBlPXIucHJvdG90eXBlLG5ldyBuKX12YXIgcj1mdW5jdGlvbigpe3JldHVybiByPU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZSxyPTEsbj1hcmd1bWVudHMubGVuZ3RoO3I8bjtyKyspZm9yKHZhciBvIGluIGU9YXJndW1lbnRzW3JdKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLG8pJiYodFtvXT1lW29dKTtyZXR1cm4gdH0sci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIG4odCxlLHIsbil7cmV0dXJuIG5ldyhyfHwocj1Qcm9taXNlKSkoKGZ1bmN0aW9uKG8sYyl7ZnVuY3Rpb24gaSh0KXt0cnl7cyhuLm5leHQodCkpfWNhdGNoKHQpe2ModCl9fWZ1bmN0aW9uIGEodCl7dHJ5e3Mobi50aHJvdyh0KSl9Y2F0Y2godCl7Yyh0KX19ZnVuY3Rpb24gcyh0KXt2YXIgZTt0LmRvbmUbyh0LnZhbHVlKTooZT10LnZhbHVlLGUgaW5zdGFuY2VvZiByP2U6bmV3IHIoKGZ1bmN0aW9uKHQpe3QoZSl9KSkpLnRoZW4oaSxhKX1zKChuPW4uYXBwbHkodCxlfHxbXSkpLm5leHQoKSl9KSl9ZnVuY3Rpb24gbyh0LGUpe3ZhciByLG4sbyxjLGk9e2xhYmVsOjAsc2VudDpmdW5jdGlvbigpe2lmKDEmb1swXSl0aHJvdyBvWzFdO3JldHVybiBvWzFdfSx0cnlzOltdLG9wczpbXX07cmV0dXJuIGM9e25leHQ6YSgwKSx0aHJvdzphKDEpLHJldHVybjphKDIpfSwiZnVuY3Rpb24iPT10eXBlb2YgU3ltYm9sJiYoY1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KSxjO2Z1bmN0aW9uIGEoYyl7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihjKXtpZihyKXRocm93IG5ldyBUeXBlRXJyb3IoIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy4iKTtmb3IoO2k7KXRyeXtpZihyPTEsbiYmKG89MiZjWzBdP24ucmV0dXJuOmNbMF0/bi50aHJvd3x8KChvPW4ucmV0dXJuKSYmby5jYWxsKG4pLDApOm4ubmV4dCkmJiEobz1vLmNhbGwobixjWzFdKSkuZG9uZSlyZXR1cm4gbztzd2l0Y2gobj0wLG8mJihjPVsyJmNbMF0sby52YWx1ZV0pLGNbMF0pe2Nhc2UgMDpjYXNlIDE6bz1jO2JyZWFrO2Nhc2UgNDpyZXR1cm4gaS5sYWJlbCsrLHt2YWx1ZTpjWzFdLGRvbmU6ITF9O2Nhc2UgNTppLmxhYmVsKyssbj1jWzFdLGM9WzBdO2NvbnRpbnVlO2Nhc2UgNzpjPWkub3BzLnBvcCgpLGkudHJ5cy5wb3AoKTtjb250aW51ZTtkZWZhdWx0OmlmKCEobz1pLnRyeXMsKG89by5sZW5ndGg+MCYmb1tvLmxlbmd0aC0xXSl8fDYhPT1jWzBdJiYyIT09Y1swXSkpe2k9MDtjb250aW51ZX1pZigzPT09Y1swXSYmKCFvfHxjWzFdPm9bMF0mJmNbMV08b1szXSkpe2kubGFiZWw9Y1sxXTticmVha31pZig2PT09Y1swXSYmaS5sYWJlbDxvWzFdKXtpLmxhYmVsPW9bMV0sbz1jO2JyZWFrfWlmKG8mJmkubGFiZWw8b1syXSl7aS5sYWJlbD1vWzJdLGkub3BzLnB1c2goYyk7YnJlYWt9b1syXSYmaS5vcHMucG9wKCksaS50cnlzLnBvcCgpO2NvbnRpbnVlfWM9ZS5jYWxsKHQsaSl9Y2F0Y2godCl7Yz1bNix0XSxuPTB9ZmluYWxseXtyPW89MH1pZig1JmNbMF0pdGhyb3cgY1sxXTtyZXR1cm57dmFsdWU6Y1swXT9jWzFdOnZvaWQgMCxkb25lOiEwfX0oW2MsYV0pfX19ZnVuY3Rpb24gYyh0LGUpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1bXSksdCYmIWUuaW5jbHVkZXModCk/dDoiIn12YXIgaT1mdW5jdGlvbih0KXtmdW5jdGlvbiByKGUsbil7dmFyIG89dC5jYWxsKHRoaXMsbil8fHRoaXM7cmV0dXJuIG8uZXJyb3I9ZSxvLmVycm9yX2Rlc2NyaXB0aW9uPW4sT2JqZWN0LnNldFByb3RvdHlwZU9mKG8sci5wcm90b3R5cGUpLG99cmV0dXJuIGUocix0KSxyLmZyb21QYXlsb2FkPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgcih0LmVycm9yLHQuZXJyb3JfZGVzY3JpcHRpb24pfSxyfShFcnJvcik7IWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSxuLG8sYyl7dm9pZCAwPT09YyYmKGM9bnVsbCk7dmFyIGk9dC5jYWxsKHRoaXMsZSxuKXx8dGhpcztyZXR1cm4gaS5zdGF0ZT1vLGkuYXBwU3RhdGU9YyxPYmplY3Quc2V0UHJvdG90eXBlT2YoaSxyLnByb3RvdHlwZSksaX1lKHIsdCl9KGkpLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSl7dmFyIG49dC5jYWxsKHRoaXMpfHx0aGlzO3JldHVybiBuLnBvcHVwPWUsT2JqZWN0LnNldFByb3RvdHlwZU9mKG4sci5wcm90b3R5cGUpLG59ZShyLHQpfShmdW5jdGlvbih0KXtmdW5jdGlvbiByKCl7dmFyIGU9dC5jYWxsKHRoaXMsInRpbWVvdXQiLCJUaW1lb3V0Iil8fHRoaXM7cmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZihlLHIucHJvdG90eXBlKSxlfXJldHVybiBlKHIsdCkscn0oaSkpLGZ1bmN0aW9uKHQpe2Z1bmN0aW9uIHIoZSl7dmFyIG49dC5jYWxsKHRoaXMsImNhbmNlbGxlZCIsIlBvcHVwIGNsb3NlZCIpfHx0aGlzO3JldHVybiBuLnBvcHVwPWUsT2JqZWN0LnNldFByb3RvdHlwZU9mKG4sci5wcm90b3R5cGUpLG59ZShyLHQpfShpKSxmdW5jdGlvbih0KXtmdW5jdGlvbiByKGUsbixvKXt2YXIgYz10LmNhbGwodGhpcyxlLG4pfHx0aGlzO3JldHVybiBjLm1mYV90b2tlbj1vLE9iamVjdC5zZXRQcm90b3R5cGVPZihjLHIucHJvdG90eXBlKSxjfWUocix0KX0oaSk7dmFyIGE9ZnVuY3Rpb24odCl7ZnVuY3Rpb24gcihlLG4pe3ZhciBvPXQuY2FsbCh0aGlzLCJtaXNzaW5nX3JlZnJlc2hfdG9rZW4iLCJNaXNzaW5nIFJlZnJlc2ggVG9rZW4gKGF1ZGllbmNlOiAnIi5jb25jYXQoYyhlLFsiZGVmYXVsdCJdKSwiJywgc2NvcGU6ICciKS5jb25jYXQoYyhuKSwiJykiKSl8fHRoaXM7cmV0dXJuIG8uYXVkaWVuY2U9ZSxvLnNjb3BlPW4sT2JqZWN0LnNldFByb3RvdHlwZU9mKG8sci5wcm90b3R5cGUpLG99cmV0dXJuIGUocix0KSxyfShpKSxzPXt9LHU9ZnVuY3Rpb24odCxlKXtyZXR1cm4iIi5jb25jYXQodCwifCIpLmNvbmNhdChlKX07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKHQpe3ZhciBlPXQuZGF0YSxjPWUudGltZW91dCxpPWUuYXV0aCxmPWUuZmV0Y2hVcmwsbD1lLmZldGNoT3B0aW9ucyxwPWUudXNlRm9ybURhdGEsaD1mdW5jdGlvbih0LGUpe3ZhciByPSJmdW5jdGlvbiI9PXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXTtpZighcilyZXR1cm4gdDt2YXIgbixvLGM9ci5jYWxsKHQpLGk9W107dHJ5e2Zvcig7KHZvaWQgMD09PWV8fGUtLSA+MCkmJiEobj1jLm5leHQoKSkuZG9uZTspaS5wdXNoKG4udmFsdWUpfWNhdGNoKHQpe289e2Vycm9yOnR9fWZpbmFsbHl7dHJ5e24mJiFuLmRvbmUmJihyPWMucmV0dXJuKSYmci5jYWxsKGMpfWZpbmFsbHl7aWYobyl0aHJvdyBvLmVycm9yfX1yZXR1cm4gaX0odC5wb3J0cywxKVswXTtyZXR1cm4gbih2b2lkIDAsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgdCxlLG4seSx2LGIsZCx3LE8sXztyZXR1cm4gbyh0aGlzLChmdW5jdGlvbihvKXtzd2l0Y2goby5sYWJlbCl7Y2FzZSAwOm49KGU9aXx8e30pLmF1ZGllbmNlLHk9ZS5zY29wZSxvLmxhYmVsPTE7Y2FzZSAxOmlmKG8udHJ5cy5wdXNoKFsxLDcsLDhdKSwhKHY9cD8obT1sLmJvZHksaz1uZXcgVVJMU2VhcmNoUGFyYW1zKG0pLFA9e30say5mb3JFYWNoKChmdW5jdGlvbih0LGUpe1BbZV09dH0pKSxQKTpKU09OLnBhcnNlKGwuYm9keSkpLnJlZnJlc2hfdG9rZW4mJiJyZWZyZXNoX3Rva2VuIj09PXYuZ3JhbnRfdHlwZSl7aWYoYj1mdW5jdGlvbih0LGUpe3JldHVybiBzW3UodCxlKV19KG4seSksIWIpdGhyb3cgbmV3IGEobix5KTtsLmJvZHk9cD9uZXcgVVJMU2VhcmNoUGFyYW1zKHIocih7fSx2KSx7cmVmcmVzaF90b2tlbjpifSkpLnRvU3RyaW5nKCk6SlNPTi5zdHJpbmdpZnkocihyKHt9LHYpLHtyZWZyZXNoX3Rva2VuOmJ9KSl9ZD12b2lkIDAsImZ1bmN0aW9uIj09dHlwZW9mIEFib3J0Q29udHJvbGxlciYmKGQ9bmV3IEFib3J0Q29udHJvbGxlcixsLnNpZ25hbD1kLnNpZ25hbCksdz12b2lkIDAsby5sYWJlbD0yO2Nhc2UgMjpyZXR1cm4gby50cnlzLnB1c2goWzIsNCwsNV0pLFs0LFByb21pc2UucmFjZShbKGc9YyxuZXcgUHJvbWlzZSgoZnVuY3Rpb24odCl7cmV0dXJuIHNldFRpbWVvdXQodCxnKX0pKSksZmV0Y2goZixyKHt9LGwpKV0pXTtjYXNlIDM6cmV0dXJuIHc9by5zZW50KCksWzMsNV07Y2FzZSA0OnJldHVybiBPPW8uc2VudCgpLGgucG9zdE1lc3NhZ2Uoe2Vycm9yOk8ubWVzc2FnZX0pLFsyXTtjYXNlIDU6cmV0dXJuIHc/WzQsdy5qc29uKCldOihkJiZkLmFib3J0KCksaC5wb3N0TWVzc2FnZSh7ZXJyb3I6IlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJyJ9KSxbMl0pO2Nhc2UgNjpyZXR1cm4odD1vLnNlbnQoKSkucmVmcmVzaF90b2tlbj8oZnVuY3Rpb24odCxlLHIpe3NbdShlLHIpXT10fSh0LnJlZnJlc2hfdG9rZW4sbix5KSxkZWxldGUgdC5yZWZyZXNoX3Rva2VuKTpmdW5jdGlvbih0LGUpe2RlbGV0ZSBzW3UodCxlKV19KG4seSksaC5wb3N0TWVzc2FnZSh7b2s6dy5vayxqc29uOnR9KSxbMyw4XTtjYXNlIDc6cmV0dXJuIF89by5zZW50KCksaC5wb3N0TWVzc2FnZSh7b2s6ITEsanNvbjp7ZXJyb3JfZGVzY3JpcHRpb246Xy5tZXNzYWdlfX0pLFszLDhdO2Nhc2UgODpyZXR1cm5bMl19dmFyIGcsbSxrLFB9KSl9KSl9KSl9KCk7Cgo=",
eo = null,
no = !1,
function(t) {
    return an = an || vs(to, eo, no),
    new Worker(an,t)
}
), cn = {}, gs = function() {
    function t(e, n) {
        this.cache = e,
        this.clientId = n,
        this.manifestKey = this.createManifestKeyFrom(this.clientId)
    }
    return t.prototype.add = function(e) {
        var n;
        return O(this, void 0, void 0, function() {
            var r, o;
            return C(this, function(a) {
                switch (a.label) {
                case 0:
                    return o = Set.bind,
                    [4, this.cache.get(this.manifestKey)];
                case 1:
                    return (r = new (o.apply(Set, [void 0, ((n = a.sent()) === null || n === void 0 ? void 0 : n.keys) || []]))).add(e),
                    [4, this.cache.set(this.manifestKey, {
                        keys: fn([], Ht(r), !1)
                    })];
                case 2:
                    return a.sent(),
                    [2]
                }
            })
        })
    }
    ,
    t.prototype.remove = function(e) {
        return O(this, void 0, void 0, function() {
            var n, r;
            return C(this, function(o) {
                switch (o.label) {
                case 0:
                    return [4, this.cache.get(this.manifestKey)];
                case 1:
                    return (n = o.sent()) ? ((r = new Set(n.keys)).delete(e),
                    r.size > 0 ? [4, this.cache.set(this.manifestKey, {
                        keys: fn([], Ht(r), !1)
                    })] : [3, 3]) : [3, 5];
                case 2:
                case 4:
                    return [2, o.sent()];
                case 3:
                    return [4, this.cache.remove(this.manifestKey)];
                case 5:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.get = function() {
        return this.cache.get(this.manifestKey)
    }
    ,
    t.prototype.clear = function() {
        return this.cache.remove(this.manifestKey)
    }
    ,
    t.prototype.createManifestKeyFrom = function(e) {
        return "
																													  ".concat("@@auth0spajs@@","::"
																													  ).concat(e)
																													  }
																													  ,
																													  t
																													  }(),
																													  ro=new
																													  Dc,
																													  bs={
																													  memory:
																													  function()
																													  {
																													  return
																													  new
																													  cs().enclosedCache
																													  },
																													  localstorage:
																													  function()
																													  {
																													  return
																													  new
																													  as
																													  }
																													  },
																													  oo=function(t)
																													  {
																													  return
																													  bs[t]
																													  },
																													  ws=function()
																													  {
																													  return
																													  !
																													  Trident.*rv:11\.0
																													  .test(navigator.userAgent)
																													  },
																													  Ss=function()
																													  {
																													  function
																													  t(e)
																													  {
																													  var
																													  n,
																													  r,
																													  o,
																													  a;
																													  if
																													  (this.options=e,
																													  typeof
																													  window
																													<"u"
																													  &&
																													  function()
																													  {
																													  if
																													  (!Qn())
																													  throw
																													  new
																													  Error("For
																													  security
																													  reasons,
																													  `window.crypto`
																													  is
																													  required
																													  to
																													  run
																													  `auth0-spa-js`.");
																													  if
																													  (ni()===void
																													  0)
																													  throw
																													  new
																													  Error(`
																													  auth0-spa-js
																													  must
																													  run
																													  on
																													  a
																													  secure
																													  origin.
																													  See
																													  https:
																													  github.com
																													  auth0
																													  auth0-spa-js
																													  blob
																													  master
																													  FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin
																													  for
																													  more
																													  information.
																													  `)
																													  }(),
																													  e.cache
																													  &&
																													  e.cacheLocation
																													  &&
																													  console.warn("Both
																													  `cache`
																													  and
																													  `cacheLocation`
																													  options
																													  have
																													  been
																													  specified
																													  in
																													  the
																													  Auth0Client
																													  configuration;
																													  ignoring
																													  `cacheLocation`
																													  and
																													  using
																													  `cache`."),
																													  e.cache)
																													  o=e.cache;
																													  else
																													  {
																													  if
																													  (this.cacheLocation=e.cacheLocation
																													  ||"memory"
																													  ,
																													  !oo(this.cacheLocation))
																													  throw
																													  new
																													  Error('Invalid
																													  cache
																													  location"'.concat(this.cacheLocation, '"
																													  '));
																													  o=oo(this.cacheLocation)()
																													  }
																													  this.httpTimeoutMs=e.httpTimeoutInSeconds
																													  ?
																													  1e3
																													  *
																													  e.httpTimeoutInSeconds
																													  :
																													  1e4,
																													  this.cookieStorage=e.legacySameSiteCookie===
																													  !1?
																													  Vt
																													  :
																													  ps,
																													  this.orgHintCookieName=(a=
																													  this.options.client_id,"auth0."
																													  .concat(a,".organization_hint"
																													  )),
																													  this.isAuthenticatedCookieName=function(s)
																													  {
																													  return"auth0."
																													  .concat(s,".is.authenticated"
																													  )
																													  }(this.options.client_id),
																													  this.sessionCheckExpiryDays=e.sessionCheckExpiryDays
																													  ||
																													  1;
																													  var
																													  i,
																													  u=e.useCookiesForTransactions
																													  ?
																													  this.cookieStorage
																													  :
																													  ys;
																													  this.scope=this.options.scope,
																													  this.transactionManager=new
																													  us(u,this.options.client_id),
																													  this.nowProvider=this.options.nowProvider
																													  ||
																													  ei,
																													  this.cacheManager=new
																													  ss(o,o.allKeys
																													  ?
																													  null
																													  :
																													  new
																													  gs(o,this.options.client_id),this.nowProvider),
																													  this.domainUrl=(i=
																													  this.options.domain,^https?:\/\//.test(i)
																													  ?
																													  i
																													  :"https://"
																													  .concat(i)),
																													  this.tokenIssuer=function(s,
																													  c)
																													  {
																													  return
																													  s
																													  ?
																													  s.startsWith("https:") ? s : "
																													  https:".concat(s, "
																													  ")
																													  :""
																													  .concat(c,"/"
																													  )
																													  }(this.options.issuer,
																													  this.domainUrl),
																													  this.defaultScope=mt("openid"
																													  ,
																													  ((r=(n=
																													  this.options)===null
																													  ||
																													  n===void
																													  0
																													  ?
																													  void
																													  0
																													  :
																													  n.advancedOptions)===null
																													  ||
																													  r===void
																													  0
																													  ?
																													  void
																													  0
																													  :
																													  r.defaultScope)
																													  !==void
																													  0
																													  ?
																													  this.options.advancedOptions.defaultScope
																													  :"openid profile email"
																													  ),
																													  this.options.useRefreshTokens
																													  &&
																													  (this.scope=mt(this.scope,
																													  "offline_access")),
																													  typeof
																													  window
																													<"u"
																													  &&
																													  window.Worker
																													  &&
																													  this.options.useRefreshTokens
																													  &&
																													  this.cacheLocation==="memory"
																													  &&
																													  ws()
																													  &&
																													  (this.worker=new
																													  ms),
																													  this.customOptions=function(s)
																													  {
																													  return
																													  s.advancedOptions,
																													  s.audience,
																													  s.auth0Client,
																													  s.authorizeTimeoutInSeconds,
																													  s.cacheLocation,
																													  s.client_id,
																													  s.domain,
																													  s.issuer,
																													  s.leeway,
																													  s.max_age,
																													  s.redirect_uri,
																													  s.scope,
																													  s.useRefreshTokens,
																													  s.useCookiesForTransactions,
																													  s.useFormData,
																													  D(s,
																													  ["advancedOptions","audience"
																													  ,"auth0Client"
																													  ,"authorizeTimeoutInSeconds"
																													  ,"cacheLocation"
																													  ,"client_id"
																													  ,"domain"
																													  ,"issuer"
																													  ,"leeway"
																													  ,"max_age"
																													  ,"redirect_uri"
																													  ,"scope"
																													  ,"useRefreshTokens"
																													  ,"useCookiesForTransactions"
																													  ,"useFormData"
																													  ])
																													  }(e),
																													  this.useRefreshTokensFallback=this.options.useRefreshTokensFallback
																													  !==!1
																													  }
																													  return
																													  t.prototype._url=function(e)
																													  {
																													  var
																													  n=encodeURIComponent(btoa(JSON.stringify(this.options.auth0Client
																													  ||
																													  ti)));
																													  return""
																													  .concat(this.domainUrl).concat(e,"&auth0Client="
																													  ).concat(n)
																													  }
																													  ,
																													  t.prototype._getParams=function(e,
																													  n,
																													  r,
																													  o,
																													  a)
																													  {
																													  var
																													  i=this.options;
																													  i.useRefreshTokens,
																													  i.useCookiesForTransactions,
																													  i.useFormData,
																													  i.auth0Client,
																													  i.cacheLocation,
																													  i.advancedOptions,
																													  i.detailedResponse,
																													  i.nowProvider,
																													  i.authorizeTimeoutInSeconds,
																													  i.legacySameSiteCookie,
																													  i.sessionCheckExpiryDays,
																													  i.domain,
																													  i.leeway,
																													  i.httpTimeoutInSeconds;
																													  var
																													  u=D(i,
																													  ["useRefreshTokens","useCookiesForTransactions"
																													  ,"useFormData"
																													  ,"auth0Client"
																													  ,"cacheLocation"
																													  ,"advancedOptions"
																													  ,"detailedResponse"
																													  ,"nowProvider"
																													  ,"authorizeTimeoutInSeconds"
																													  ,"legacySameSiteCookie"
																													  ,"sessionCheckExpiryDays"
																													  ,"domain"
																													  ,"leeway"
																													  ,"httpTimeoutInSeconds"
																													  ]);
																													  return
																													  _(_(_({},
																													  u),
																													  e),
																													  {
																													  scope:
																													  mt(this.defaultScope,
																													  this.scope,
																													  e.scope),
																													  response_type:"code"
																													  ,
																													  response_mode:"query"
																													  ,
																													  state:
																													  n,
																													  nonce:
																													  r,
																													  redirect_uri:
																													  a
																													  ||
																													  this.options.redirect_uri,
																													  code_challenge:
																													  o,
																													  code_challenge_method:"S256"
																													  })
																													  }
																													  ,
																													  t.prototype._authorizeUrl=function(e)
																													  {
																													  return
																													  this._url("
																													  authorize?".concat(xn(e)))
																													  }
																													  ,
																													  t.prototype._verifyIdToken=function(e,
																													  n,
																													  r)
																													  {
																													  return
																													  O(this,
																													  void
																													  0,
																													  void
																													  0,
																													  function()
																													  {
																													  var
																													  o;
																													  return
																													  C(this,
																													  function(a)
																													  {
																													  switch
																													  (a.label)
																													  {
																													  case
																													  0:
																													  return
																													  [4,
																													  this.nowProvider()];
																													  case
																													  1:
																													  return
																													  o=a.sent(),
																													  [2,
																													  fs({
																													  iss:
																													  this.tokenIssuer,
																													  aud:
																													  this.options.client_id,
																													  id_token:
																													  e,
																													  nonce:
																													  n,
																													  organizationId:
																													  r,
																													  leeway:
																													  this.options.leeway,
																													  max_age:
																													  this._parseNumber(this.options.max_age),
																													  now:
																													  o
																													  })]
																													  }
																													  })
																													  })
																													  }
																													  ,
																													  t.prototype._parseNumber=function(e)
																													  {
																													  return
																													  typeof
																													  e
																													  !="string"
																													  ?
																													  e
																													  :
																													  parseInt(e,
																													  10)
																													  ||
																													  void
																													  0
																													  }
																													  ,
																													  t.prototype._processOrgIdHint=function(e)
																													  {
																													  e
																													  ?
																													  this.cookieStorage.save(this.orgHintCookieName,
																													  e,
																													  {
																													  daysUntilExpire:
																													  this.sessionCheckExpiryDays,
																													  cookieDomain:
																													  this.options.cookieDomain
																													  })
																													  :
																													  this.cookieStorage.remove(this.orgHintCookieName)
																													  }
																													  ,
																													  t.prototype.buildAuthorizeUrl=function(e)
																													  {
																													  return
																													  e===void
																													  0
																													  &&
																													  (e={}),
																													  O(this,
																													  void
																													  0,
																													  void
																													  0,
																													  function()
																													  {
																													  var
																													  n,
																													  r,
																													  o,
																													  a,
																													  i,
																													  u,
																													  s,
																													  c,
																													  l,
																													  f,
																													  d,
																													  h;
																													  return
																													  C(this,
																													  function(v)
																													  {
																													  switch
																													  (v.label)
																													  {
																													  case
																													  0:
																													  return
																													  n=e.redirect_uri,
																													  r=e.appState,
																													  o=D(e,
																													  ["redirect_uri","appState"
																													  ]),
																													  a=Nt(it()),
																													  i=Nt(it()),
																													  u=it(),
																													  [4,
																													  rn(u)];
																													  case
																													  1:
																													  return
																													  s=v.sent(),
																													  c=on(s),
																													  l=e.fragment
																													  ?"#"
																													  .concat(e.fragment)
																													  :""
																													  ,
																													  f=this._getParams(o,
																													  a,
																													  i,
																													  c,
																													  n),
																													  d=this._authorizeUrl(f),
																													  h=e.organization
																													  ||
																													  this.options.organization,
																													  this.transactionManager.create(_({
																													  nonce:
																													  i,
																													  code_verifier:
																													  u,
																													  appState:
																													  r,
																													  scope:
																													  f.scope,
																													  audience:
																													  f.audience
																													  ||"default"
																													  ,
																													  redirect_uri:
																													  f.redirect_uri,
																													  state:
																													  a
																													  },
																													  h
																													  &&
																													  {
																													  organizationId:
																													  h
																													  })),
																													  [2,
																													  d
																													  +
																													  l]
																													  }
																													  })
																													  })
																													  }
																													  ,
																													  t.prototype.loginWithPopup=function(e,
																													  n)
																													  {
																													  return
																													  O(this,
																													  void
																													  0,
																													  void
																													  0,
																													  function()
																													  {
																													  var
																													  r,
																													  o,
																													  a,
																													  i,
																													  u,
																													  s,
																													  c,
																													  l,
																													  f,
																													  d,
																													  h,
																													  v,
																													  g;
																													  return
																													  C(this,
																													  function(y)
																													  {
																													  switch
																													  (y.label)
																													  {
																													  case
																													  0:
																													  if
																													  (e=e
																													  ||
																													  {},
																													  !(n=n
																													  ||
																													  {}).popup
																													  &&
																													  (n.popup=function(p)
																													  {
																													  var
																													  m=window.screenX
																													  +
																													  (window.innerWidth
																													  -
																													  400)
																													  2
																													  ,
																													  w=window.screenY
																													  +
																													  (window.innerHeight
																													  -
																													  600)
																													  2;
																													  return
																													  window.open(p,"auth0:authorize:popup"
																													  ,"left="
																													  .concat(m,",top="
																													  ).concat(w,",width="
																													  ).concat(400,",height="
																													  ).concat(600,",resizable,scrollbars=yes,status=1"
																													  ))
																													  }(""),
																													  !n.popup))
																													  throw
																													  new
																													  Error("Unable
																													  to
																													  open
																													  a
																													  popup
																													  for
																													  loginWithPopup
																													  -
																													  window.open
																													  returned
																													  `null`");
																													  return
																													  r=D(e,
																													  []),
																													  o=Nt(it()),
																													  a=Nt(it()),
																													  i=it(),
																													  [4,
																													  rn(i)];
																													  case
																													  1:
																													  return
																													  u=y.sent(),
																													  s=on(u),
																													  c=this._getParams(r,
																													  o,
																													  a,
																													  s,
																													  this.options.redirect_uri
																													  ||
																													  window.location.origin),
																													  l=this._authorizeUrl(_(_({},
																													  c),
																													  {
																													  response_mode:"web_message"
																													  })),
																													  n.popup.location.href=l,
																													  [4,
																													  $c(_(_({},
																													  n),
																													  {
																													  timeoutInSeconds:
																													  n.timeoutInSeconds
																													  ||
																													  this.options.authorizeTimeoutInSeconds
																													  ||
																													  60
																													  }))];
																													  case
																													  2:
																													  if
																													  (f=y.sent(),
																													  o
																													  !==f.state)
																													  throw
																													  new
																													  Error("Invalid
																													  state");
																													  return
																													  [4,
																													  Te({
																													  audience:
																													  c.audience,
																													  scope:
																													  c.scope,
																													  baseUrl:
																													  this.domainUrl,
																													  client_id:
																													  this.options.client_id,
																													  code_verifier:
																													  i,
																													  code:
																													  f.code,
																													  grant_type:"authorization_code"
																													  ,
																													  redirect_uri:
																													  c.redirect_uri,
																													  auth0Client:
																													  this.options.auth0Client,
																													  useFormData:
																													  this.options.useFormData,
																													  timeout:
																													  this.httpTimeoutMs
																													  },
																													  this.worker)];
																													  case
																													  3:
																													  return
																													  d=y.sent(),
																													  h=e.organization
																													  ||
																													  this.options.organization,
																													  [4,
																													  this._verifyIdToken(d.id_token,
																													  a,
																													  h)];
																													  case
																													  4:
																													  return
																													  v=y.sent(),
																													  g=_(_({},
																													  d),
																													  {
																													  decodedToken:
																													  v,
																													  scope:
																													  c.scope,
																													  audience:
																													  c.audience
																													  ||"default"
																													  ,
																													  client_id:
																													  this.options.client_id
																													  }),
																													  [4,
																													  this.cacheManager.set(g)];
																													  case
																													  5:
																													  return
																													  y.sent(),
																													  this.cookieStorage.save(this.isAuthenticatedCookieName,
																													  !0,
																													  {
																													  daysUntilExpire:
																													  this.sessionCheckExpiryDays,
																													  cookieDomain:
																													  this.options.cookieDomain
																													  }),
																													  this._processOrgIdHint(v.claims.org_id),
																													  [2]
																													  }
																													  })
																													  })
																													  }
																													  ,
																													  t.prototype.getUser=function(e)
																													  {
																													  return
																													  e===void
																													  0
																													  &&
																													  (e={}),
																													  O(this,
																													  void
																													  0,
																													  void
																													  0,
																													  function()
																													  {
																													  var
																													  n,
																													  r,
																													  o;
																													  return
																													  C(this,
																													  function(a)
																													  {
																													  switch
																													  (a.label)
																													  {
																													  case
																													  0:
																													  return
																													  n=e.audience
																													  ||
																													  this.options.audience
																													  ||"default"
																													  ,
																													  r=mt(this.defaultScope,
																													  this.scope,
																													  e.scope),
																													  [4,
																													  this.cacheManager.get(new
																													  Et({
																													  client_id:
																													  this.options.client_id,
																													  audience:
																													  n,
																													  scope:
																													  r
																													  }))];
																													  case
																													  1:
																													  return
																													  [2,
																													  (o=a.sent())
																													  &&
																													  o.decodedToken
																													  &&
																													  o.decodedToken.user]
																													  }
																													  })
																													  })
																													  }
																													  ,
																													  t.prototype.getIdTokenClaims=function(e)
																													  {
																													  return
																													  e===void
																													  0
																													  &&
																													  (e={}),
																													  O(this,
																													  void
																													  0,
																													  void
																													  0,
																													  function()
																													  {
																													  var
																													  n,
																													  r,
																													  o;
																													  return
																													  C(this,
																													  function(a)
																													  {
																													  switch
																													  (a.label)
																													  {
																													  case
																													  0:
																													  return
																													  n=e.audience
																													  ||
																													  this.options.audience
																													  ||"default"
																													  ,
																													  r=mt(this.defaultScope,
																													  this.scope,
																													  e.scope),
																													  [4,
																													  this.cacheManager.get(new
																													  Et({
																													  client_id:
																													  this.options.client_id,
																													  audience:
																													  n,
																													  scope:
																													  r
																													  }))];
																													  case
																													  1:
																													  return
																													  [2,
																													  (o=a.sent())
																													  &&
																													  o.decodedToken
																													  &&
																													  o.decodedToken.claims]
																													  }
																													  })
																													  })
																													  }
																													  ,
																													  t.prototype.loginWithRedirect=function(e)
																													  {
																													  return
																													  e===void
																													  0
																													  &&
																													  (e={}),
																													  O(this,
																													  void
																													  0,
																													  void
																													  0,
																													  function()
																													  {
																													  var
																													  n,
																													  r,
																													  o;
																													  return
																													  C(this,
																													  function(a)
																													  {
																													  switch
																													  (a.label)
																													  {
																													  case
																													  0:
																													  return
																													  n=e.redirectMethod,
																													  r=D(e,
																													  ["redirectMethod"]),
																													  [4,
																													  this.buildAuthorizeUrl(r)];
																													  case
																													  1:
																													  return
																													  o=a.sent(),
																													  window.location[n
																													  ||"assign"
																													  ](o),
																													  [2]
																													  }
																													  })
																													  })
																													  }
																													  ,
																													  t.prototype.handleRedirectCallback=function(e)
																													  {
																													  return
																													  e===void
																													  0
																													  &&
																													  (e=window.location.href),
																													  O(this,
																													  void
																													  0,
																													  void
																													  0,
																													  function()
																													  {
																													  var
																													  n,
																													  r,
																													  o,
																													  a,
																													  i,
																													  u,
																													  s,
																													  c,
																													  l,
																													  f;
																													  return
																													  C(this,
																													  function(d)
																													  {
																													  switch
																													  (d.label)
																													  {
																													  case
																													  0:
																													  if
																													  ((n=e.split("?"
																													  ).slice(1)).length===0)
																													  throw
																													  new
																													  Error("There
																													  are
																													  no
																													  query
																													  params
																													  available
																													  for
																													  parsing.");
																													  if
																													  (r=function(h)
																													  {
																													  h.indexOf("#")> -1 && (h = h.substr(0, h.indexOf("#")));
                        var v = h.split("&")
                          , g = {};
                        return v.forEach(function(y) {
                            var p = Ht(y.split("="), 2)
                              , m = p[0]
                              , w = p[1];
                            g[m] = decodeURIComponent(w)
                        }),
                        g.expires_in && (g.expires_in = parseInt(g.expires_in)),
                        g
                    }(n.join("")),
                    o = r.state,
                    a = r.code,
                    i = r.error,
                    u = r.error_description,
                    !(s = this.transactionManager.get()))
                        throw new Error("Invalid state");
                    if (this.transactionManager.remove(),
                    i)
                        throw new Bc(i,u,o,s.appState);
                    if (!s.code_verifier || s.state && s.state !== o)
                        throw new Error("Invalid state");
                    return c = {
                        audience: s.audience,
                        scope: s.scope,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: s.code_verifier,
                        grant_type: "authorization_code",
                        code: a,
                        auth0Client: this.options.auth0Client,
                        useFormData: this.options.useFormData,
                        timeout: this.httpTimeoutMs
                    },
                    s.redirect_uri !== void 0 && (c.redirect_uri = s.redirect_uri),
                    [4, Te(c, this.worker)];
                case 1:
                    return l = d.sent(),
                    [4, this._verifyIdToken(l.id_token, s.nonce, s.organizationId)];
                case 2:
                    return f = d.sent(),
                    [4, this.cacheManager.set(_(_(_(_({}, l), {
                        decodedToken: f,
                        audience: s.audience,
                        scope: s.scope
                    }), l.scope ? {
                        oauthTokenScope: l.scope
                    } : null), {
                        client_id: this.options.client_id
                    }))];
                case 3:
                    return d.sent(),
                    this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                        daysUntilExpire: this.sessionCheckExpiryDays,
                        cookieDomain: this.options.cookieDomain
                    }),
                    this._processOrgIdHint(f.claims.org_id),
                    [2, {
                        appState: s.appState
                    }]
                }
            })
        })
    }
    ,
    t.prototype.checkSession = function(e) {
        return O(this, void 0, void 0, function() {
            var n;
            return C(this, function(r) {
                switch (r.label) {
                case 0:
                    if (!this.cookieStorage.get(this.isAuthenticatedCookieName)) {
                        if (!this.cookieStorage.get("auth0.is.authenticated"))
                            return [2];
                        this.cookieStorage.save(this.isAuthenticatedCookieName, !0, {
                            daysUntilExpire: this.sessionCheckExpiryDays,
                            cookieDomain: this.options.cookieDomain
                        }),
                        this.cookieStorage.remove("auth0.is.authenticated")
                    }
                    r.label = 1;
                case 1:
                    return r.trys.push([1, 3, , 4]),
                    [4, this.getTokenSilently(e)];
                case 2:
                    return r.sent(),
                    [3, 4];
                case 3:
                    if (n = r.sent(),
                    !Hc.includes(n.error))
                        throw n;
                    return [3, 4];
                case 4:
                    return [2]
                }
            })
        })
    }
    ,
    t.prototype.getTokenSilently = function(e) {
        return e === void 0 && (e = {}),
        O(this, void 0, void 0, function() {
            var n, r, o, a = this;
            return C(this, function(i) {
                return n = _(_({
                    audience: this.options.audience,
                    ignoreCache: !1
                }, e), {
                    scope: mt(this.defaultScope, this.scope, e.scope)
                }),
                r = n.ignoreCache,
                o = D(n, ["ignoreCache"]),
                [2, (u = function() {
                    return a._getTokenSilently(_({
                        ignoreCache: r
                    }, o))
                }
                ,
                s = "".concat(this.options.client_id, "::").concat(o.audience, "::").concat(o.scope),
                c = cn[s],
                c || (c = u().finally(function() {
                    delete cn[s],
                    c = null
                }),
                cn[s] = c),
                c)];
                var u, s, c
            })
        })
    }
    ,
    t.prototype._getTokenSilently = function(e) {
        return e === void 0 && (e = {}),
        O(this, void 0, void 0, function() {
            var n, r, o, a, i, u, s, c, l;
            return C(this, function(f) {
                switch (f.label) {
                case 0:
                    return n = e.ignoreCache,
                    r = D(e, ["ignoreCache"]),
                    n ? [3, 2] : [4, this._getEntryFromCache({
                        scope: r.scope,
                        audience: r.audience || "default",
                        client_id: this.options.client_id,
                        getDetailedEntry: e.detailedResponse
                    })];
                case 1:
                    if (o = f.sent())
                        return [2, o];
                    f.label = 2;
                case 2:
                    return [4, (d = function() {
                        return ro.acquireLock("auth0.lock.getTokenSilently", 5e3)
                    }
                    ,
                    h = 10,
                    h === void 0 && (h = 3),
                    O(void 0, void 0, void 0, function() {
                        var v;
                        return C(this, function(g) {
                            switch (g.label) {
                            case 0:
                                v = 0,
                                g.label = 1;
                            case 1:
                                return v < h
																														  ?
																														  [4,
																														  d()]
																														  :
																														  [3,
																														  4];
																														  case
																														  2:
																														  if
																														  (g.sent())
																														  return
																														  [2,
																														  !0];
																														  g.label=3;
																														  case
																														  3:
																														  return
																														  v++,
																														  [3,
																														  1];
																														  case
																														  4:
																														  return
																														  [2,
																														  !1]
																														  }
																														  })
																														  }))];
																														  case
																														  3:
																														  if
																														  (!f.sent())
																														  return
																														  [3,
																														  15];
																														  f.label=4;
																														  case
																														  4:
																														  return
																														  f.trys.push([4,
																														  ,
																														  12,
																														  14]),
																														  n
																														  ?
																														  [3,
																														  6]
																														  :
																														  [4,
																														  this._getEntryFromCache({
																														  scope:
																														  r.scope,
																														  audience:
																														  r.audience
																														  ||"default"
																														  ,
																														  client_id:
																														  this.options.client_id,
																														  getDetailedEntry:
																														  e.detailedResponse
																														  })];
																														  case
																														  5:
																														  if
																														  (o=f.sent())
																														  return
																														  [2,
																														  o];
																														  f.label=6;
																														  case
																														  6:
																														  return
																														  this.options.useRefreshTokens
																														  ?
																														  [4,
																														  this._getTokenUsingRefreshToken(r)]
																														  :
																														  [3,
																														  8];
																														  case
																														  7:
																														  return
																														  i=f.sent(),
																														  [3,
																														  10];
																														  case
																														  8:
																														  return
																														  [4,
																														  this._getTokenFromIFrame(r)];
																														  case
																														  9:
																														  i=f.sent(),
																														  f.label=10;
																														  case
																														  10:
																														  return
																														  a=i,
																														  [4,
																														  this.cacheManager.set(_({
																														  client_id:
																														  this.options.client_id
																														  },
																														  a))];
																														  case
																														  11:
																														  return
																														  f.sent(),
																														  this.cookieStorage.save(this.isAuthenticatedCookieName,
																														  !0,
																														  {
																														  daysUntilExpire:
																														  this.sessionCheckExpiryDays,
																														  cookieDomain:
																														  this.options.cookieDomain
																														  }),
																														  e.detailedResponse
																														  ?
																														  (u=a.id_token,
																														  s=a.access_token,
																														  c=a.oauthTokenScope,
																														  l=a.expires_in,
																														  [2,
																														  _(_({
																														  id_token:
																														  u,
																														  access_token:
																														  s
																														  },
																														  c
																														  ?
																														  {
																														  scope:
																														  c
																														  }
																														  :
																														  null),
																														  {
																														  expires_in:
																														  l
																														  })])
																														  :
																														  [2,
																														  a.access_token];
																														  case
																														  12:
																														  return
																														  [4,
																														  ro.releaseLock("auth0.lock.getTokenSilently")];
																														  case
																														  13:
																														  return
																														  f.sent(),
																														  [7];
																														  case
																														  14:
																														  return
																														  [3,
																														  16];
																														  case
																														  15:
																														  throw
																														  new
																														  Rn;
																														  case
																														  16:
																														  return
																														  [2]
																														  }
																														  var
																														  d,
																														  h
																														  })
																														  })
																														  }
																														  ,
																														  t.prototype.getTokenWithPopup=function(e,
																														  n)
																														  {
																														  return
																														  e===void
																														  0
																														  &&
																														  (e={}),
																														  n===void
																														  0
																														  &&
																														  (n={}),
																														  O(this,
																														  void
																														  0,
																														  void
																														  0,
																														  function()
																														  {
																														  return
																														  C(this,
																														  function(r)
																														  {
																														  switch
																														  (r.label)
																														  {
																														  case
																														  0:
																														  return
																														  e.audience=e.audience
																														  ||
																														  this.options.audience,
																														  e.scope=mt(this.defaultScope,
																														  this.scope,
																														  e.scope),
																														  n=_(_({},
																														  Yc),
																														  n),
																														  [4,
																														  this.loginWithPopup(e,
																														  n)];
																														  case
																														  1:
																														  return
																														  r.sent(),
																														  [4,
																														  this.cacheManager.get(new
																														  Et({
																														  scope:
																														  e.scope,
																														  audience:
																														  e.audience
																														  ||"default"
																														  ,
																														  client_id:
																														  this.options.client_id
																														  }))];
																														  case
																														  2:
																														  return
																														  [2,
																														  r.sent().access_token]
																														  }
																														  })
																														  })
																														  }
																														  ,
																														  t.prototype.isAuthenticated=function()
																														  {
																														  return
																														  O(this,
																														  void
																														  0,
																														  void
																														  0,
																														  function()
																														  {
																														  return
																														  C(this,
																														  function(e)
																														  {
																														  switch
																														  (e.label)
																														  {
																														  case
																														  0:
																														  return
																														  [4,
																														  this.getUser()];
																														  case
																														  1:
																														  return
																														  [2,
																														  !!e.sent()]
																														  }
																														  })
																														  })
																														  }
																														  ,
																														  t.prototype.buildLogoutUrl=function(e)
																														  {
																														  e===void
																														  0
																														  &&
																														  (e={}),
																														  e.client_id
																														  !==null
																														  ?
																														  e.client_id=e.client_id
																														  ||
																														  this.options.client_id
																														  :
																														  delete
																														  e.client_id;
																														  var
																														  n=e.federated
																														  ,
																														  r=D(e,
																														  ["federated"])
																														  ,
																														  o=n
																														  ?"&federated"
																														  :""
																														  ;
																														  return
																														  this._url("
																														  v2
																														  logout?".concat(xn(r)))
																														  +
																														  o
																														  }
																														  ,
																														  t.prototype.logout=function(e)
																														  {
																														  var
																														  n=this;
																														  e===void
																														  0
																														  &&
																														  (e={});
																														  var
																														  r=e.localOnly
																														  ,
																														  o=D(e,
																														  ["localOnly"]);
																														  if
																														  (r
																														  &&
																														  o.federated)
																														  throw
																														  new
																														  Error("It
																														  is
																														  invalid
																														  to
																														  set
																														  both
																														  the
																														  `federated`
																														  and
																														  `localOnly`
																														  options
																														  to
																														  `true`");
																														  var
																														  a=function()
																														  {
																														  if
																														  (n.cookieStorage.remove(n.orgHintCookieName),
																														  n.cookieStorage.remove(n.isAuthenticatedCookieName),
																														  !r)
																														  {
																														  var
																														  i=n.buildLogoutUrl(o);
																														  window.location.assign(i)
																														  }
																														  };
																														  if
																														  (this.options.cache)
																														  return
																														  this.cacheManager.clear().then(function()
																														  {
																														  return
																														  a()
																														  });
																														  this.cacheManager.clearSync(),
																														  a()
																														  }
																														  ,
																														  t.prototype._getTokenFromIFrame=function(e)
																														  {
																														  return
																														  O(this,
																														  void
																														  0,
																														  void
																														  0,
																														  function()
																														  {
																														  var
																														  n,
																														  r,
																														  o,
																														  a,
																														  i,
																														  u,
																														  s,
																														  c,
																														  l,
																														  f,
																														  d,
																														  h,
																														  v,
																														  g,
																														  y,
																														  p,
																														  m;
																														  return
																														  C(this,
																														  function(w)
																														  {
																														  switch
																														  (w.label)
																														  {
																														  case
																														  0:
																														  return
																														  n=Nt(it()),
																														  r=Nt(it()),
																														  o=it(),
																														  [4,
																														  rn(o)];
																														  case
																														  1:
																														  a=w.sent(),
																														  i=on(a),
																														  u=D(e,
																														  ["detailedResponse"]),
																														  s=this._getParams(u,
																														  n,
																														  r,
																														  i,
																														  e.redirect_uri
																														  ||
																														  this.options.redirect_uri
																														  ||
																														  window.location.origin),
																														  (c=this.cookieStorage.get(this.orgHintCookieName))
																														  &&
																														  !s.organization
																														  &&
																														  (s.organization=c),
																														  l=this._authorizeUrl(_(_({},
																														  s),
																														  {
																														  prompt:"none"
																														  ,
																														  response_mode:"web_message"
																														  })),
																														  w.label=2;
																														  case
																														  2:
																														  if
																														  (w.trys.push([2,
																														  6,
																														  ,
																														  7]),
																														  window.crossOriginIsolated)
																														  throw
																														  new
																														  ht("login_required","The
																														  application
																														  is
																														  running
																														  in
																														  a
																														  Cross-Origin
																														  Isolated
																														  context,
																														  silently
																														  retrieving
																														  a
																														  token
																														  without
																														  refresh
																														  token
																														  is
																														  not
																														  possible.");
																														  return
																														  f=e.timeoutInSeconds
																														  ||
																														  this.options.authorizeTimeoutInSeconds,
																														  [4,
																														  (x=l,
																														  k=this.domainUrl,
																														  T=f,
																														  T===void
																														  0
																														  &&
																														  (T=60),
																														  new
																														  Promise(function(j,
																														  L)
																														  {
																														  var
																														  E=window.document.createElement("iframe"
																														  );
																														  E.setAttribute("width","0"
																														  ),
																														  E.setAttribute("height","0"
																														  ),
																														  E.style.display="none"
																														  ;
																														  var
																														  J,
																														  pt=function()
																														  {
																														  window.document.body.contains(E)
																														  &&
																														  (window.document.body.removeChild(E),
																														  window.removeEventListener("message",
																														  J,
																														  !1))
																														  },
																														  ci=setTimeout(function()
																														  {
																														  L(new
																														  Rn),
																														  pt()
																														  },
																														  1e3
																														  *
																														  T);
																														  J=function(It)
																														  {
																														  if
																														  (It.origin==k
																														  &&
																														  It.data
																														  &&
																														  It.data.type==="authorization_response"
																														  )
																														  {
																														  var
																														  $n=It.source;
																														  $n
																														  &&
																														  $n.close(),
																														  It.data.response.error
																														  ?
																														  L(ht.fromPayload(It.data.response))
																														  :
																														  j(It.data.response),
																														  clearTimeout(ci),
																														  window.removeEventListener("message",
																														  J,
																														  !1),
																														  setTimeout(pt,
																														  2e3)
																														  }
																														  }
																														  ,
																														  window.addEventListener("message",
																														  J,
																														  !1),
																														  window.document.body.appendChild(E),
																														  E.setAttribute("src",
																														  x)
																														  }
																														  ))];
																														  case
																														  3:
																														  if
																														  (d=w.sent(),
																														  n
																														  !==d.state)
																														  throw
																														  new
																														  Error("Invalid
																														  state");
																														  return
																														  h=e.scope,
																														  v=e.audience,
																														  g=D(e,
																														  ["scope","audience"
																														  ,"redirect_uri"
																														  ,"ignoreCache"
																														  ,"timeoutInSeconds"
																														  ,"detailedResponse"
																														  ]),
																														  [4,
																														  Te(_(_(_({},
																														  this.customOptions),
																														  g),
																														  {
																														  scope:
																														  h,
																														  audience:
																														  v,
																														  baseUrl:
																														  this.domainUrl,
																														  client_id:
																														  this.options.client_id,
																														  code_verifier:
																														  o,
																														  code:
																														  d.code,
																														  grant_type:"authorization_code"
																														  ,
																														  redirect_uri:
																														  s.redirect_uri,
																														  auth0Client:
																														  this.options.auth0Client,
																														  useFormData:
																														  this.options.useFormData,
																														  timeout:
																														  g.timeout
																														  ||
																														  this.httpTimeoutMs
																														  }),
																														  this.worker)];
																														  case
																														  4:
																														  return
																														  y=w.sent(),
																														  [4,
																														  this._verifyIdToken(y.id_token,
																														  r)];
																														  case
																														  5:
																														  return
																														  p=w.sent(),
																														  this._processOrgIdHint(p.claims.org_id),
																														  [2,
																														  _(_({},
																														  y),
																														  {
																														  decodedToken:
																														  p,
																														  scope:
																														  s.scope,
																														  oauthTokenScope:
																														  y.scope,
																														  audience:
																														  s.audience
																														  ||"default"
																														  })];
																														  case
																														  6:
																														  throw
																														  (m=w.sent()).error===
																														  "login_required"&&
																														  this.logout({
																														  localOnly:
																														  !0
																														  }),
																														  m;
																														  case
																														  7:
																														  return
																														  [2]
																														  }
																														  var
																														  x,
																														  k,
																														  T
																														  })
																														  })
																														  }
																														  ,
																														  t.prototype._getTokenUsingRefreshToken=function(e)
																														  {
																														  return
																														  O(this,
																														  void
																														  0,
																														  void
																														  0,
																														  function()
																														  {
																														  var
																														  n,
																														  r,
																														  o,
																														  a,
																														  i,
																														  u,
																														  s,
																														  c,
																														  l;
																														  return
																														  C(this,
																														  function(f)
																														  {
																														  switch
																														  (f.label)
																														  {
																														  case
																														  0:
																														  return
																														  e.scope=mt(this.defaultScope,
																														  this.options.scope,
																														  e.scope),
																														  [4,
																														  this.cacheManager.get(new
																														  Et({
																														  scope:
																														  e.scope,
																														  audience:
																														  e.audience
																														  ||"default"
																														  ,
																														  client_id:
																														  this.options.client_id
																														  }))];
																														  case
																														  1:
																														  return
																														  (n=f.sent())
																														  &&
																														  n.refresh_token
																														  ||
																														  this.worker
																														  ?
																														  [3,
																														  4]
																														  :
																														  this.useRefreshTokensFallback
																														  ?
																														  [4,
																														  this._getTokenFromIFrame(e)]
																														  :
																														  [3,
																														  3];
																														  case
																														  2:
																														  return
																														  [2,
																														  f.sent()];
																														  case
																														  3:
																														  throw
																														  new
																														  Qc(e.audience
																														  ||"default"
																														  ,e.scope);
																														  case
																														  4:
																														  r=e.redirect_uri
																														  ||
																														  this.options.redirect_uri
																														  ||
																														  window.location.origin,
																														  a=e.scope,
																														  i=e.audience,
																														  u=D(e,
																														  ["scope","audience"
																														  ,"ignoreCache"
																														  ,"timeoutInSeconds"
																														  ,"detailedResponse"
																														  ]),
																														  s=typeof
																														  e.timeoutInSeconds=="number"
																														  ?
																														  1e3
																														  *
																														  e.timeoutInSeconds
																														  :
																														  null,
																														  f.label=5;
																														  case
																														  5:
																														  return
																														  f.trys.push([5,
																														  7,
																														  ,
																														  10]),
																														  [4,
																														  Te(_(_(_(_(_({},
																														  this.customOptions),
																														  u),
																														  {
																														  audience:
																														  i,
																														  scope:
																														  a,
																														  baseUrl:
																														  this.domainUrl,
																														  client_id:
																														  this.options.client_id,
																														  grant_type:"refresh_token"
																														  ,
																														  refresh_token:
																														  n
																														  &&
																														  n.refresh_token,
																														  redirect_uri:
																														  r
																														  }),
																														  s
																														  &&
																														  {
																														  timeout:
																														  s
																														  }),
																														  {
																														  auth0Client:
																														  this.options.auth0Client,
																														  useFormData:
																														  this.options.useFormData,
																														  timeout:
																														  this.httpTimeoutMs
																														  }),
																														  this.worker)];
																														  case
																														  6:
																														  return
																														  o=f.sent(),
																														  [3,
																														  10];
																														  case
																														  7:
																														  return
																														  ((c=f.sent()).message.indexOf("Missing Refresh Token"
																														  )> -1 || c.message && c.message.indexOf("invalid refresh token") > -1) && this.useRefreshTokensFallback ? [4, this._getTokenFromIFrame(e)] : [3, 9];
                case 8:
                    return [2, f.sent()];
                case 9:
                    throw c;
                case 10:
                    return [4, this._verifyIdToken(o.id_token)];
                case 11:
                    return l = f.sent(),
                    [2, _(_({}, o), {
                        decodedToken: l,
                        scope: e.scope,
                        oauthTokenScope: o.scope,
                        audience: e.audience || "default"
                    })]
                }
            })
        })
    }
    ,
    t.prototype._getEntryFromCache = function(e) {
        var n = e.scope
          , r = e.audience
          , o = e.client_id
          , a = e.getDetailedEntry
          , i = a !== void 0 && a;
        return O(this, void 0, void 0, function() {
            var u, s, c, l, f;
            return C(this, function(d) {
                switch (d.label) {
                case 0:
                    return [4, this.cacheManager.get(new Et({
                        scope: n,
                        audience: r,
                        client_id: o
                    }), 60)];
                case 1:
                    return (u = d.sent()) && u.access_token ? i ? (s = u.id_token,
                    c = u.access_token,
                    l = u.oauthTokenScope,
                    f = u.expires_in,
                    [2, _(_({
                        id_token: s,
                        access_token: c
                    }, l ? {
                        scope: l
                    } : null), {
                        expires_in: f
                    })]) : [2, u.access_token] : [2]
                }
            })
        })
    }
    ,
    t
}(), oi = {
    isAuthenticated: !1,
    isLoading: !0
}, at = function() {
    throw new Error("You forgot to wrap your component in <Auth0Provider>.")
}, ks = F(F({}, oi), {
    buildAuthorizeUrl: at,
    buildLogoutUrl: at,
    getAccessTokenSilently: at,
    getAccessTokenWithPopup: at,
    getIdTokenClaims: at,
    loginWithRedirect: at,
    loginWithPopup: at,
    logout: at,
    handleRedirectCallback: at
}), ii = X.createContext(ks), _s = function(t) {
    ui(e, t);
    function e(n, r) {
        var o = t.call(this, r || n) || this;
        return o.error = n,
        o.error_description = r,
        Object.setPrototypeOf(o, e.prototype),
        o
    }
    return e
}(Error), Is = /[?&]code=[^&]+/, Ts = /[?&]state=[^&]+/, Os = /[?&]error=[^&]+/, Cs = function(t) {
    return t === void 0 && (t = window.location.search),
    (Is.test(t) || Os.test(t)) && Ts.test(t)
}, ai = function(t) {
    return function(e) {
        return "error"in e ? new _s(e.error,e.error_description) : e instanceof Error ? e : new Error(t)
    }
}, io = ai("Login failed"), sn = ai("Get access token failed"), Es = function(t, e) {
    var n, r;
    switch (e.type) {
    case "LOGIN_POPUP_STARTED":
        return F(F({}, t), {
            isLoading: !0
        });
    case "LOGIN_POPUP_COMPLETE":
    case "INITIALISED":
        return F(F({}, t), {
            isAuthenticated: !!e.user,
            user: e.user,
            isLoading: !1,
            error: void 0
        });
    case "HANDLE_REDIRECT_COMPLETE":
    case "GET_ACCESS_TOKEN_COMPLETE":
        return ((n = t.user) === null || n === void 0 ? void 0 : n.updated_at) === ((r = e.user) === null || r === void 0 ? void 0 : r.updated_at) ? t : F(F({}, t), {
            isAuthenticated: !!e.user,
            user: e.user
        });
    case "LOGOUT":
        return F(F({}, t), {
            isAuthenticated: !1,
            user: void 0
        });
    case "ERROR":
        return F(F({}, t), {
            isLoading: !1,
            error: e.error
        })
    }
}, Rs = function(t) {
    var e = t.clientId
      , n = t.redirectUri
      , r = t.maxAge
      , o = Un(t, ["clientId", "redirectUri", "maxAge"]);
    return F(F({}, o), {
        client_id: e,
        redirect_uri: n,
        max_age: r,
        auth0Client: {
            name: "auth0-react",
            version: "1.10.2"
        }
    })
}, ao = function(t) {
    if (t) {
        var e = t.redirectUri
          , n = Un(t, ["redirectUri"]);
        return F(F({}, n), {
            redirect_uri: e
        })
    }
}, xs = function(t) {
    window.history.replaceState({}, document.title, (t == null ? void 0 : t.returnTo) || window.location.pathname)
}, js = function(t) {
    var e = t.children
      , n = t.skipRedirectCallback
      , r = t.onRedirectCallback
      , o = r === void 0 ? xs : r
      , a = Un(t, ["children", "skipRedirectCallback", "onRedirectCallback"])
      , i = X.useState(function() {
        return new Ss(Rs(a))
    })[0]
      , u = X.useReducer(Es, oi)
      , s = u[0]
      , c = u[1]
      , l = X.useRef(!1);
    X.useEffect(function() {
        l.current || (l.current = !0,
        function() {
            return ee(void 0, void 0, void 0, function() {
                var k, T, j;
                return ne(this, function(L) {
                    switch (L.label) {
                    case 0:
                        return L.trys.push([0, 6, , 7]),
                        Cs() && !n ? [4, i.handleRedirectCallback()] : [3, 2];
                    case 1:
                        return k = L.sent().appState,
                        o(k),
                        [3, 4];
                    case 2:
                        return [4, i.checkSession()];
                    case 3:
                        L.sent(),
                        L.label = 4;
                    case 4:
                        return [4, i.getUser()];
                    case 5:
                        return T = L.sent(),
                        c({
                            type: "INITIALISED",
                            user: T
                        }),
                        [3, 7];
                    case 6:
                        return j = L.sent(),
                        c({
                            type: "ERROR",
                            error: io(j)
                        }),
                        [3, 7];
                    case 7:
                        return [2]
                    }
                })
            })
        }())
    }, [i, o, n]);
    var f = X.useCallback(function(k) {
        return i.buildAuthorizeUrl(ao(k))
    }, [i])
      , d = X.useCallback(function(k) {
        return i.buildLogoutUrl(k)
    }, [i])
      , h = X.useCallback(function(k) {
        return i.loginWithRedirect(ao(k))
    }, [i])
      , v = X.useCallback(function(k, T) {
        return ee(void 0, void 0, void 0, function() {
            var j, L;
            return ne(this, function(E) {
                switch (E.label) {
                case 0:
                    c({
                        type: "LOGIN_POPUP_STARTED"
                    }),
                    E.label = 1;
                case 1:
                    return E.trys.push([1, 3, , 4]),
                    [4, i.loginWithPopup(k, T)];
                case 2:
                    return E.sent(),
                    [3, 4];
                case 3:
                    return j = E.sent(),
                    c({
                        type: "ERROR",
                        error: io(j)
                    }),
                    [2];
                case 4:
                    return [4, i.getUser()];
                case 5:
                    return L = E.sent(),
                    c({
                        type: "LOGIN_POPUP_COMPLETE",
                        user: L
                    }),
                    [2]
                }
            })
        })
    }, [i])
      , g = X.useCallback(function(k) {
        k === void 0 && (k = {});
        var T = i.logout(k);
        if (k.localOnly) {
            if (T && typeof T.then == "function")
                return T.then(function() {
                    return c({
                        type: "LOGOUT"
                    })
                });
            c({
                type: "LOGOUT"
            })
        }
        return T
    }, [i])
      , y = X.useCallback(function(k) {
        return ee(void 0, void 0, void 0, function() {
            var T, j, L, E;
            return ne(this, function(J) {
                switch (J.label) {
                case 0:
                    return J.trys.push([0, 2, 3, 5]),
                    [4, i.getTokenSilently(k)];
                case 1:
                    return T = J.sent(),
                    [3, 5];
                case 2:
                    throw j = J.sent(),
                    sn(j);
                case 3:
                    return L = c,
                    E = {
                        type: "GET_ACCESS_TOKEN_COMPLETE"
                    },
                    [4, i.getUser()];
                case 4:
                    return L.apply(void 0, [(E.user = J.sent(),
                    E)]),
                    [7];
                case 5:
                    return [2, T]
                }
            })
        })
    }, [i])
      , p = X.useCallback(function(k, T) {
        return ee(void 0, void 0, void 0, function() {
            var j, L, E, J;
            return ne(this, function(pt) {
                switch (pt.label) {
                case 0:
                    return pt.trys.push([0, 2, 3, 5]),
                    [4, i.getTokenWithPopup(k, T)];
                case 1:
                    return j = pt.sent(),
                    [3, 5];
                case 2:
                    throw L = pt.sent(),
                    sn(L);
                case 3:
                    return E = c,
                    J = {
                        type: "GET_ACCESS_TOKEN_COMPLETE"
                    },
                    [4, i.getUser()];
                case 4:
                    return E.apply(void 0, [(J.user = pt.sent(),
                    J)]),
                    [7];
                case 5:
                    return [2, j]
                }
            })
        })
    }, [i])
      , m = X.useCallback(function(k) {
        return i.getIdTokenClaims(k)
    }, [i])
      , w = X.useCallback(function(k) {
        return ee(void 0, void 0, void 0, function() {
            var T, j, L;
            return ne(this, function(E) {
                switch (E.label) {
                case 0:
                    return E.trys.push([0, 2, 3, 5]),
                    [4, i.handleRedirectCallback(k)];
                case 1:
                    return [2, E.sent()];
                case 2:
                    throw T = E.sent(),
                    sn(T);
                case 3:
                    return j = c,
                    L = {
                        type: "HANDLE_REDIRECT_COMPLETE"
                    },
                    [4, i.getUser()];
                case 4:
                    return j.apply(void 0, [(L.user = E.sent(),
                    L)]),
                    [7];
                case 5:
                    return [2]
                }
            })
        })
    }, [i])
      , x = X.useMemo(function() {
        return F(F({}, s), {
            buildAuthorizeUrl: f,
            buildLogoutUrl: d,
            getAccessTokenSilently: y,
            getAccessTokenWithPopup: p,
            getIdTokenClaims: m,
            loginWithRedirect: h,
            loginWithPopup: v,
            logout: g,
            handleRedirectCallback: w
        })
    }, [s, f, d, y, p, m, h, v, g, w]);
    return si.createElement(ii.Provider, {
        value: x
    }, e)
}, As = function() {
    return X.useContext(ii)
};
export {js as A, As as u};
//# sourceMappingURL=auth0-react.esm-Deohc1Uf.js.map
