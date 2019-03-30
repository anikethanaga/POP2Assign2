/*1. Imperative programming paradigm:
It is one of the oldest programming paradigm.
It features close relation relation to machine architecture.
It is based on Von Neumann architecture.
It works by changing the program state through assignment statements.
It performs step by step task by changing state.
The main focus is on how to achieve the goal.
The paradigm consist of several statements and after execution of all the result is stored.*/

#include<stdio.h>

int main()
{
	int i,n,ele,index;
	printf("Enter the number of numbers \n");
	scanf("%d",&n);
	int arr[n];
	printf("Enter the numbers\n");
	for(i=0;i<n;i++)
	{
		scanf("%d",&arr[i]);
	}
	printf("Enter a number to search\n");
	scanf("%d",&ele);
	index=-1;
	for(i=0;i<n;i++)
	{
		if(ele==arr[i])
		{
			index=i;
			break;
		}
	}
	if(index == -1)
	{
		printf("Element not present\n");
	}
	else
	{
		printf("Element is present at index %d\n",index);
	}

	return 0;
}