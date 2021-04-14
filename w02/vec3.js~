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
		this.max = v.x
		if(this.max < v.y)
		{
			this.max = v.y
		}
		else if(this.max < v.z)
		{
			this.max = v.z
		}
		return this
	}

        min(v)
	{
		this.min = v.x
		if(this.min > v.y)
		{
			this.min = v.y
		}
		else if(this.min > v.z)
		{
			this.min = v.z
		}
		return this
	}

	mid(v)
	{
		this.mid = v.x
		if(this.mid != mam(v) && this.mid != min(v))
		{
			return this
		}
		this.mid = v.y
		if(this.mid != max(v) && this.mid != min(v))
		{
			return this
		}
		else
		{
			this.mid = v.z
			return this
		}
	}

}
