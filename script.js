// Count number of tokens in a space-separated string (NO ARRAYS)
function tokenCount(s) {
  if (!s) return 0;
  var i = 0, len = s.length, inToken = false, count = 0;

  while (i < len) {
    var ch = s.charAt(i);
    if (ch !== ' ' && ch !== '\t' && ch !== '\n' && ch !== '\r') {
      if (!inToken) { inToken = true; count++; }
    } else {
      inToken = false;
    }
    i++;
  }
  return count;
}

// Get the Nth token (1-based) without using arrays
function getTokenAt(s, pos) {
  if (!s) return "";
  var target = pos;
  var i = 0, len = s.length, inToken = false;
  var current = 0, start = -1, end = -1;

  while (i < len) {
    var ch = s.charAt(i);

    if (ch !== ' ' && ch !== '\t' && ch !== '\n' && ch !== '\r') {
      if (!inToken) {
        inToken = true;
        current++;
        if (current === target) start = i;
      }
    } else {
      if (inToken && current === target) {
        end = i;
        break;
      }
      inToken = false;
    }
    i++;
  }

  if (inToken && current === target && end === -1) end = len;
  if (start === -1) return "";
  return s.substring(start, end);
}

function randIndex(n) {
  return Math.floor(Math.random() * n) + 1;
}

function capitalize(w) {
  if (!w) return "";
  return w.charAt(0).toUpperCase() + w.slice(1);
}

// Generate a name
function makeName(adjs, shops, others) {
  var aCount = tokenCount(adjs);
  var sCount = tokenCount(shops);
  var oCount = tokenCount(others);

  var a = getTokenAt(adjs, randIndex(aCount));
  var b = getTokenAt(shops, randIndex(sCount));
  var c = getTokenAt(others, randIndex(oCount));

  var pattern = Math.floor(Math.random() * 4) + 1;

  if (pattern === 1) return capitalize(a) + " " + capitalize(b);
  if (pattern === 2) return capitalize(a) + " " + capitalize(b) + " " + capitalize(c);
  if (pattern === 3) return capitalize(b) + " " + capitalize(c);
  return capitalize(a) + " " + capitalize(b) + " & " + capitalize(c);
}

// ======== USER INPUT PART (TERMINAL) ========
var adjectives = "crazy amazing fire";
var shops = "engine foods garments";
var suffixes = "bros limited hub";

var count = 10; // how many business names?

console.log("\nGenerated Business Names:\n");
for (var i = 1; i <= count; i++) {
  console.log(i + ". " + makeName(adjectives, shops, suffixes));
}
console.log("\nDone.\n");
