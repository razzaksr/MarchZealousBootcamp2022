package backend.poc.first.POC1BackEnd;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ResourceService 
{
	@Autowired// repository,service,bean,component,controller
	ResourceRepository repo;
	
	public Resource create(Resource resource)
	{
		return repo.save(resource);
	}
}
