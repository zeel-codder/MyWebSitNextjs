---
title: C programming Basic Programs
keywords: c

---


# C programming Basic Programs


# YOU CAN FIND PROGRAMS BELLOW:

## P.1. Hello World

*Program:*

```c
#include<stdio.h>
void main()
{
    printf("Hello world of zeel");
}
```

*Output:*

```terminal
Hello world of zeel
```

## P.2. Find Address of any variable

*Program:*

```c
#include<stdio.h>
void main()
{
    int a=10;
    char b='a';
    float c;
    printf("Address of Integer a is %u\n",&a);
    printf("Address of Character b is %u\n",&b);
    printf("Address of Float c is %u\n",&c);
}
```

*Output:*

```terminal
Address of Integer a is 12334
Address of Character b is 8535
Address of Float c is 748478.
```


## P.3. ASSIC of any character by using C program 

*Program:*

```c
#include<stdio.h>
void main()
{
    int a=67;
    char b='a';
     printf("The ASSIC of c is %d\n",b);
     printf("the character at ASSIC a is %c",a);
}
```

*Output;*
```terminal
The ASSIC of c is 97
The Character at ASSIC a is C
```

## P.3. Use of Scanf function in  C program 

*Program:*

```c
#include<stdio.h>
void main()
{
    int a;
    printf("Enter your number\n");
    scanf("%d",&a);
    printf("Enter number is %d\n",a);
    
char c;
    c='A';
    printf("%d",c);
}
```

*Output:*
```terminal
Enter your number
12
Enter number is 12
65
```

## P.5. Use of \n function in  C program 

*Program:*

```c
#include<stdio.h>
void main()
{
    printf("Hello world of zeel\n");
    printf("I am programming Anteryami");
    printf("\n\n\nThis is basic C program");
    printf("\nGood Luck");
}
```

*Output:*

```terminal
Hello world of zeel
I am programming Anteryami

This is basic C program
Good Luck
```