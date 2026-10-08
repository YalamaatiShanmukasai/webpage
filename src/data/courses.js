export const courses = [
  {
    id: "c",
    language: "C",
    level: "BEGINNER → ADVANCED",
    title: "Complete C Programming",
    description: "From your first C program to pointers, data structures, algorithms and practical projects.",
    modules: [
      { id: "c1", title: "C Foundations", lessons: [
        { title: "What is C?", summary: "Understand the C language, compiler, source files and the basic program structure.", points: ["C program lifecycle", "main function", "statements and comments"], code: "#include <stdio.h>\n\nint main() {\n    printf(\"Hello, CodeVexa!\\n\");\n    return 0;\n}" },
        { title: "Variables and Data Types", summary: "Store information using appropriate C data types.", points: ["int, float, double, char", "Declarations and initialization", "Basic type conversion"], code: "#include <stdio.h>\n\nint main() {\n    int coin = 3;\n    float score = 92.5f;\n    char rank = 'A';\n    printf(\"%d %.1f %c\", coin, score, rank);\n    return 0;\n}" },
        { title: "Input, Output and Operators", summary: "Read values and build expressions with arithmetic, relational and logical operators.", points: ["scanf and printf", "Arithmetic operators", "Comparison and logic"], code: "int a, b;\nscanf(\"%d %d\", &a, &b);\nint total = a + b;\nprintf(\"%d\", total);" }
      ]},
      { id: "c2", title: "Control Flow", lessons: [
        { title: "if, else and switch", summary: "Make decisions based on program state.", points: ["if / else if / else", "Nested conditions", "switch statements"], code: "if (score >= 90) {\n    printf(\"Excellent\");\n} else {\n    printf(\"Keep practicing\");\n}" },
        { title: "for, while and do-while", summary: "Repeat work safely using loops.", points: ["Loop counters", "Conditions", "Nested loops"], code: "for (int i = 1; i <= 5; i++) {\n    printf(\"%d \", i);\n}" }
      ]},
      { id: "c3", title: "Functions, Arrays and Strings", lessons: [
        { title: "Functions", summary: "Split programs into reusable units.", points: ["Parameters", "Return values", "Function prototypes"], code: "int add(int a, int b) {\n    return a + b;\n}" },
        { title: "Arrays and Strings", summary: "Work with collections of values and character sequences.", points: ["1D arrays", "2D arrays", "C strings"], code: "int marks[3] = {80, 90, 85};\nprintf(\"%d\", marks[1]);" }
      ]},
      { id: "c4", title: "Pointers and Memory", lessons: [
        { title: "Pointers", summary: "Understand addresses, indirection and pointer-based programming.", points: ["Address operator", "Dereference operator", "Pointer variables"], code: "int coin = 3;\nint *p = &coin;\nprintf(\"%d\", *p);" },
        { title: "Dynamic Memory", summary: "Allocate and release memory at runtime.", points: ["malloc", "calloc and realloc", "free"], code: "int *a = malloc(5 * sizeof(int));\n/* use a ... */\nfree(a);" }
      ]},
      { id: "c5", title: "Data Structures and Algorithms", lessons: [
        { title: "Linked Lists", summary: "Build dynamic nodes and connect them into a list.", points: ["Node structure", "Insertion", "Traversal"], code: "struct Node {\n    int data;\n    struct Node *next;\n};" },
        { title: "Sorting and Searching", summary: "Learn core algorithms and reason about their performance.", points: ["Linear search", "Binary search", "Bubble / selection / insertion sort"], code: "for (int i = 0; i < n - 1; i++)\n    for (int j = 0; j < n - i - 1; j++)\n        if (a[j] > a[j + 1]) { int t=a[j]; a[j]=a[j+1]; a[j+1]=t; }" }
      ]}
    ]
  },
  {
    id: "java",
    language: "Java",
    level: "BEGINNER → ADVANCED",
    title: "Complete Java Programming",
    description: "Build strong Java fundamentals through OOP, collections, exceptions, databases and DSA.",
    modules: [
      { id: "j1", title: "Java Foundations", lessons: [
        { title: "Java and the JVM", summary: "Understand source code, bytecode, the JVM and the Java execution model.", points: ["JDK, JRE, JVM", "Compilation", "main method"], code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, CodeVexa!\");\n    }\n}" },
        { title: "Variables and Data Types", summary: "Use Java's primitive and reference types correctly.", points: ["Primitive types", "Type casting", "Constants"], code: "int coin = 3;\ndouble score = 92.5;\nchar rank = 'A';\nSystem.out.println(coin);" },
        { title: "Operators and Control Flow", summary: "Build decisions and repetition into Java programs.", points: ["Operators", "if / else", "switch and loops"], code: "for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}" }
      ]},
      { id: "j2", title: "Methods, Arrays and Strings", lessons: [
        { title: "Methods", summary: "Design reusable methods with parameters and return values.", points: ["Method signatures", "Overloading", "Return values"], code: "static int add(int a, int b) {\n    return a + b;\n}" },
        { title: "Arrays and Strings", summary: "Process collections and text efficiently.", points: ["Arrays", "String API", "StringBuilder"], code: "int[] marks = {80, 90, 85};\nSystem.out.println(marks[1]);" }
      ]},
      { id: "j3", title: "Object-Oriented Programming", lessons: [
        { title: "Classes and Objects", summary: "Model real-world entities with state and behavior.", points: ["Fields", "Constructors", "Methods"], code: "class Player {\n    int level;\n    Player(int level) { this.level = level; }\n}" },
        { title: "Inheritance and Polymorphism", summary: "Build extensible class hierarchies.", points: ["extends", "Method overriding", "Runtime polymorphism"], code: "class Animal { void sound() {} }\nclass Dog extends Animal { void sound() { System.out.println(\"Bark\"); } }" },
        { title: "Interfaces and Abstraction", summary: "Define contracts and hide implementation details.", points: ["abstract classes", "interfaces", "composition"], code: "interface Payable {\n    void pay();\n}" }
      ]},
      { id: "j4", title: "Exceptions and Collections", lessons: [
        { title: "Exception Handling", summary: "Handle runtime problems cleanly.", points: ["try / catch", "finally", "custom exceptions"], code: "try {\n    int x = 10 / 0;\n} catch (ArithmeticException ex) {\n    System.out.println(ex.getMessage());\n}" },
        { title: "Collections and Generics", summary: "Work with flexible collections safely.", points: ["List", "Set", "Map", "Generics"], code: "List<String> topics = new ArrayList<>();\ntopics.add(\"Loops\");\ntopics.add(\"Arrays\");" }
      ]},
      { id: "j5", title: "Advanced Java and DSA", lessons: [
        { title: "File Handling and JDBC", summary: "Persist data and connect Java applications to databases.", points: ["Files", "Streams", "JDBC basics"], code: "try (BufferedReader br = new BufferedReader(new FileReader(\"data.txt\"))) {\n    System.out.println(br.readLine());\n}" },
        { title: "DSA in Java", summary: "Apply data structures and algorithms using Java.", points: ["Stacks and queues", "Trees", "Sorting and searching"], code: "Deque<Integer> stack = new ArrayDeque<>();\nstack.push(10);\nstack.push(20);\nSystem.out.println(stack.pop());" }
      ]}
    ]
  },
  {
    id: "python",
    language: "Python",
    level: "BEGINNER → ADVANCED",
    title: "Complete Python Programming",
    description: "Learn Python from variables and control flow through OOP, files, APIs, DSA and real projects.",
    modules: [
      { id: "p1", title: "Python Foundations", lessons: [
        { title: "Python Setup and Syntax", summary: "Understand Python's execution model, indentation and basic syntax.", points: ["Python interpreter", "Indentation", "Variables"], code: "coin = 3\nprint(coin)" },
        { title: "Data Types", summary: "Use numbers, strings and Boolean values effectively.", points: ["int, float, str, bool", "Type conversion", "f-strings"], code: "name = \"CodeVexa\"\nscore = 95\nprint(f\"{name}: {score}\")" },
        { title: "Conditions and Loops", summary: "Control program flow with conditions and repetition.", points: ["if / elif / else", "for", "while"], code: "for i in range(1, 6):\n    print(i)" }
      ]},
      { id: "p2", title: "Functions and Collections", lessons: [
        { title: "Functions", summary: "Create reusable blocks with parameters, defaults and return values.", points: ["def", "Parameters", "Return values"], code: "def add(a, b):\n    return a + b\n\nprint(add(2, 3))" },
        { title: "Lists, Tuples, Sets and Dictionaries", summary: "Choose the right Python collection for the problem.", points: ["List operations", "Immutable tuples", "Set operations", "Dictionary lookup"], code: "student = {\"name\": \"Sai\", \"xp\": 120}\nprint(student[\"xp\"])" },
        { title: "Strings", summary: "Process text using indexing, slicing and built-in methods.", points: ["Slicing", "Methods", "Formatting"], code: "text = \"CodeVexa\"\nprint(text.lower())" }
      ]},
      { id: "p3", title: "Files, Modules and OOP", lessons: [
        { title: "Modules and Packages", summary: "Organize programs and reuse code.", points: ["import", "Modules", "Packages"], code: "import math\nprint(math.sqrt(25))" },
        { title: "File Handling and Exceptions", summary: "Read/write files and handle errors safely.", points: ["with open", "read/write", "try/except"], code: "try:\n    with open(\"data.txt\") as f:\n        print(f.read())\nexcept FileNotFoundError:\n    print(\"File not found\")" },
        { title: "Object-Oriented Python", summary: "Use classes, objects, inheritance and encapsulation.", points: ["Classes", "Constructors", "Inheritance"], code: "class Player:\n    def __init__(self, name):\n        self.name = name" }
      ]},
      { id: "p4", title: "Modern Python", lessons: [
        { title: "Comprehensions and Lambda", summary: "Write concise transformations without sacrificing readability.", points: ["List comprehensions", "Lambda", "map/filter basics"], code: "squares = [x * x for x in range(5)]\nprint(squares)" },
        { title: "Iterators and Generators", summary: "Process sequences lazily and efficiently.", points: ["iter", "next", "yield"], code: "def count_up_to(n):\n    for i in range(1, n + 1):\n        yield i" },
        { title: "JSON and API Basics", summary: "Exchange structured data with services.", points: ["JSON", "Requests concept", "API responses"], code: "import json\ndata = json.loads('{\"xp\": 120}')\nprint(data[\"xp\"])" }
      ]},
      { id: "p5", title: "DSA and Projects", lessons: [
        { title: "DSA in Python", summary: "Implement and analyze common data structures and algorithms.", points: ["Stacks and queues", "Trees and graphs", "Searching and sorting"], code: "stack = []\nstack.append(10)\nstack.append(20)\nprint(stack.pop())" },
        { title: "Problem Solving", summary: "Translate requirements into correct, testable solutions.", points: ["Understand the problem", "Design steps", "Validate edge cases"], code: "def sum_even(values):\n    return sum(x for x in values if x % 2 == 0)" },
        { title: "Capstone Project", summary: "Build a small real application using the full Python toolkit.", points: ["Plan the feature", "Implement the core logic", "Test and document"], code: "# Capstone starter\nclass App:\n    def run(self):\n        print(\"Build something useful.\")" }
      ]}
    ]
  }
];
