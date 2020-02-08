import java.until.*;
class usermaincode
{
	public static int checksum(int n)
	{
		int d,sum=0;
		while(n!=0)
		{
			d=n%10;
		if(d%2!=0)
			{sum+=d;}
		n/=10;
		if(sum%2!=0)	
		return 1;
		else
		return -1;

	}
	public static void main(String s[])
	{
		Scanner s1=new Scanner(System.in);
		int n=s1.nextInt();
		int sum=checksum(n);
		if(sum==1)
		{
			System.out.println("sum of odd digit is odd");
		}
		else
		{
			
			System.out.println("sum of odd digit is even");
		}
	}
}		
