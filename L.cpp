//---------------------------------------------------------------------------

#include <vcl.h>
#pragma hdrstop

//---------------------------------------------------------------------------

#pragma argsused

void getpid(int pid)
{
   
 //  pid:=ReadString();
   return pid;
}

void getppid(int ppid)
{
   
  // ppid:=ReadString();
   return ppid;
}

int main(int argc, char* argv[])
{
        int N;
        int P;
        N:=Console.ReadString();
        P:=Console.ReadString();


        for i=0 to N do
        Console.writestring(getpid(P));
        Console.writestring(getppid(P+i));
        return 0;
}
//---------------------------------------------------------------------------