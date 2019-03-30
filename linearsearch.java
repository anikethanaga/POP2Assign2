import java.util.Scanner;

class Data
{
	int n;
	int elements[];
	Data(int num)
	{
		n=num;
		elements = new int[n];
	}
	void getEle()
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the elements");
		for(int i=0;i<n;i++)
		{
			elements[i] = sc.nextInt();
		}
	}
	int findEle(int ele)
	{
		for(int i=1;i<n;i++)
		{
			if(ele==elements[i])
			{
				return i;
			}
		}
		return -1;
	}

}

class LinearSearch
{
	public static void main(String args[])
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the number of numbers");
		int num = sc.nextInt();
		Data d = new Data(num);
		d.getEle();
		System.out.println("Enter the search element");
		int ele=sc.nextInt();
		int index = d.findEle(ele);
		if(index==-1)
		{
			System.out.println("element not found");
		}
		else
		{
			System.out.println("element found at index : "+index);
		}
	}
}

