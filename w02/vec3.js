class Vec3
{
	// Constructor
	constructor( x, y, z )
	{
	    this.x = x;
	    this.y = y;
	    this.z = z;
	}

	max(v)
	{
		max = v.x
		if(max < v.y)
		{
			max = v.y
		}
		if(max < v.z)
		{
			max = v.z
		}
		return max
	}

        min(v)
	{
		min = v.x
		if(min > v.y)
		{
			min = v.y
		}
		if(min > v.z)
		{
			min = v.z
		}
		return min
	}

	//mid(v)
	//{
	//	mid = v.x
	//	if(mid != max(v) && mid != min(v))
	//	{
	//		return mid
	//	}
	//	mid = v.y
	//	else if(mid != max(v) && mid != min(v))
	//	{
	//		return mid
	//	}
	//	else
	//	{
	//		mid = v.z
	//		return mid
	//	}
	//}

}
